import * as grpcWeb from 'grpc-web';
import { StateServiceClient } from './proto/generated/Sim_serverServiceClientPb';
import { InitializeRequest, GridDimensions, StepRequest, WorldStateResponse, UpdateRuleRequest, UpdateRuleResponse } from './proto/generated/sim_server_pb';
import { mailbox } from './mailbox';

const stateService = new StateServiceClient('http://localhost:8080', null, null);
let stopSimulationFlag = false;


export function initWorldState(xMax, yMax, zMax) {

  const request = new InitializeRequest();
  const dims = new GridDimensions();
  dims.setXMax(xMax);
  dims.setYMax(yMax);
  dims.setZMax(zMax);
  request.setDimensions(dims);

  return stateService.initWorldState(request)
    .then((response: WorldStateResponse) => {
      console.log(`Received response: ${response.getMetadata()?.getStatus()} state ID: ${response.getMetadata()?.getStateId()}`);
      (window as any).worldStateId = response.getMetadata()?.getStateId();
      mailbox.setNewState(response);
      return response;
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
    });
}

export function stepWorldStateForward(worldStateId: number, rule: string, numSteps: number) {
  const request = new StepRequest();
  request.setWorldStateId(worldStateId);
  request.setRule(rule);
  request.setNumSteps(numSteps);

  return stateService.stepWorldStateForward(request)
    .then((response: WorldStateResponse) => {
      console.log(`Response: ${response.getMetadata()?.getStatus()}. state id: ${response.getMetadata()?.getStateId()} step: ${response.getMetadata()?.getStep()}`);
      mailbox.setNewState(response);
      return response;
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
    });
}

export function updateRule(worldStateId: number, ruleNumber: number) {
  const request = new UpdateRuleRequest();
  request.setWorldStateId(worldStateId);
  request.setRuleNumber(ruleNumber);

  return stateService.updateRule(request)
    .then((response: UpdateRuleResponse) => {
      console.log(`Response: ruleNumber: ${response.getRuleNumber()}, rule: ${response.getRule_asB64()}`);
      return response.getRule_asB64();
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
      return (window as any).rule;
    });
}

export function handleInputField(worldStateId: number, str: string) {
  if (!isValidInput(str)) {
    window.alert(`Invalid input: ${str}. Has to be integer in range 0-255`);
  }
  const ruleNumber = Number(str);
  updateRule(worldStateId, ruleNumber).then(ruleStr => {
    (window as any).rule = ruleStr;
    if (!!document.getElementById("rule-container")) {
      (document.getElementById("rule-container") as HTMLElement).innerText = `Rule: ${ruleNumber} a.k.a ${(window as any).rule}`;
    }
  });
}

function isValidInput(str: string) {
  if (typeof str != "string") return false; // we only process strings!  
  if (isNaN(str as any)) return false; // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
  if (isNaN(parseFloat(str))) return false;// ...and ensure strings of whitespace fail
  return Number.isInteger(Number(str)) && Number(str) >= 0 && Number(str) <= 255;
}

export async function runSimulationLoop(worldStateId, rule, numSteps = 1, stepSleepMs = 400) {
  const request = new StepRequest();
  request.setWorldStateId(worldStateId);
  request.setNumSteps(numSteps);
  request.setRule(rule);

  for (let i = 0; i < numSteps; i += 1) {
    if (stopSimulationFlag) {
      stopSimulationFlag = false;
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
  stopSimulationFlag = true;
}

