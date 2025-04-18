import * as grpcWeb from 'grpc-web';
import { StateServiceClient } from './proto/generated/Sim_serverServiceClientPb';
import { InitializeRequest, GridDimensions, StepRequest, WorldStateResponse, UpdateRuleRequest, UpdateRuleResponse } from './proto/generated/sim_server_pb';
import { mailbox } from './mailbox';

const stateService = new StateServiceClient('http://localhost:8080', null, null);
let shouldRunSimulationLoop = false;

export function initWorldState(xMax, yMax, zMax) {
  const request = new InitializeRequest();
  const dims = new GridDimensions();
  dims.setXMax(xMax);
  dims.setYMax(yMax);
  dims.setZMax(zMax);
  request.setDimensions(dims);

  return stateService.initWorldState(request)
    .then((response: WorldStateResponse) => {
      (window as any).worldStateId = response.getMetadata()?.getStateId();
      mailbox.setNewState(response);
      return response;
    })
    .catch((err: grpcWeb.RpcError) => {
      console.error(`Received error: ${err.code}, ${err.message}`);
    });
}

export function stepWorldStateForward(worldStateId: number, rule: string, numSteps: number) {
  const request = new StepRequest();
  request.setWorldStateId(worldStateId);
  request.setRule(rule);
  request.setNumSteps(numSteps);

  return stateService.stepWorldStateForward(request)
    .then((response: WorldStateResponse) => {
      mailbox.setNewState(response);
      return response;
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
    });
}

export function updateRuleInBackend(worldStateId: number, ruleNumber: number) {
  const request = new UpdateRuleRequest();
  request.setWorldStateId(worldStateId);
  request.setRuleNumber(ruleNumber);

  return stateService.updateRule(request)
    .then((response: UpdateRuleResponse) => {
      return response.getRule_asB64();
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
      return (window as any).rule;
    });
}

/**
 * Convert backend’s 16‑byte base‑64 rule (e.g. "AAABAAEAAAABAAEAAAAAAA==")
 * to 120 '0' + 8 Wolfram bits (MSB‑first).
 *
 * Backend layout:
 *   bit index = (center << 6) | (xPair << 4)    // yPair = zPair = 0
 *   where xPair = (left << 1) | right
 *
 * The eight elementary triplets 000–111 therefore land at indices:
 *   0, 16, 32, 48, 64, 80, 96, 112
 * We have to read those and rebuild the 8‑bit rule.
 */
export function backendRuleToBinary(b64: string): string {
  /* 1.  base‑64 → 16 raw bytes */
  const bytes: Uint8Array =
    typeof Buffer !== 'undefined'
      ? Uint8Array.from(Buffer.from(b64, 'base64'))
      : Uint8Array.from(atob(b64), c => c.charCodeAt(0));

  if (bytes.length !== 16)
    throw new Error(`Rule must be 16 bytes, got ${bytes.length}`);

  /* 2.  rebuild the 8‑bit Wolfram rule */
  let ruleByte = 0;                                   // least‑significant bit = triplet 000
  for (let triplet = 0; triplet < 8; ++triplet) {
    const left = (triplet >> 2) & 1;
    const center = (triplet >> 1) & 1;
    const right = triplet & 1;

    const xPair = (left << 1) | right;                // 0–3
    const bitIndex = (center << 6) | (xPair << 4);    // 0,16,32 … 112

    // byte & bit inside that byte (LSB‑first in each byte)
    const byteIdx = bitIndex >> 3;        // /8
    const bitInByte = bitIndex & 7;       // %8

    const set = (bytes[byteIdx] >> bitInByte) & 1;
    if (set) ruleByte |= (1 << triplet);              // set corresponding Wolfram bit
  }

  /* 3.  produce pretty 128‑bit string: 120 zeros + rule bits MSB‑first */
  const tailBits = ruleByte.toString(2).padStart(8, '0');      // e.g. 00011110
  return '0'.repeat(120) + tailBits;
}

/**
 * Convert a **16‑byte base‑64 string** (128‑bit rule) to a 128‑character
 * binary string, MSB‑first.  
 * Example   
 *   "AAAAAAAAAAAAAAAAAAAAHg=="  ➜  120×'0'  +  "00011110"
 */
export function ruleBase64ToBinary(b64: string): string {
  /* ---- 1.  decode base‑64 -> 16 raw bytes ---- */
  //  – works in both Node and browser
  const raw: Uint8Array =
    typeof Buffer !== 'undefined'
      ? Uint8Array.from(Buffer.from(b64, 'base64'))
      : Uint8Array.from(atob(b64), c => c.charCodeAt(0));

  if (raw.length !== 16)
    throw new Error(`Rule must be exactly 16 bytes (got ${raw.length}).`);

  /* ---- 2.  turn each byte into an 8‑bit binary fragment ---- */
  //    byte 0 is the most‑significant 8 bits, byte 15 the least‑significant.
  return Array.from(raw)
    .map(byte => byte.toString(2).padStart(8, '0'))
    .join('');
}


export function updateRuleInFrontend(ruleNumber: number, ruleStr: string) {
  (window as any).rule = ruleStr;
  const ruleContainer = document.getElementById('rule-container');
  if (ruleContainer) {
    ruleContainer.innerText = `Rule: ${ruleNumber} a.k.a ${backendRuleToBinary(ruleStr)}`;
  }
}

export function ruleNumberOnChange(worldStateId: number, str: string) {
  if (!isValidInput(str)) {
    window.alert(`Invalid input: ${str}. Has to be integer in range 0-255`);
    return;
  }
  const ruleNumber = Number(str);
  updateRuleInBackend(worldStateId, ruleNumber)
    .then((ruleStr) => updateRuleInFrontend(ruleNumber, ruleStr));
}

function isValidInput(str: string) {
  const maxInt = (BigInt(1) << BigInt(128)) - BigInt(1);
  if (typeof str != "string") return false; // we only process strings!  
  if (isNaN(str as any)) return false; // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
  if (isNaN(parseFloat(str))) return false;// ...and ensure strings of whitespace fail
  return Number.isInteger(Number(str)) && Number(str) >= 0 && Number(str) <= maxInt;
}

export async function runSimulationLoop(worldStateId: number, rule: string, numSteps = 1, stepSleepMs = 400) {
  const request = new StepRequest();
  request.setWorldStateId(worldStateId);
  request.setNumSteps(numSteps);
  request.setRule(rule);

  shouldRunSimulationLoop = true;
  for (let i = 0; i < numSteps; i++) {
    if (!shouldRunSimulationLoop) {
      break;
    }
    await new Promise(r => setTimeout(r, stepSleepMs));
    await stateService.stepWorldStateForward(request)
      .then(mailbox.setNewState)
      .then(r => {
        const counterDiv = window.document.getElementById('counter');
        if (counterDiv) {
          counterDiv.innerHTML = `${(r as WorldStateResponse).getMetadata()?.getStep()}`;
        }
      });
  }
}

export function stopSimulation() {
  console.log("Stopping simulation...");
  shouldRunSimulationLoop = false;
}
