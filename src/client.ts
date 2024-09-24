import * as grpcWeb from 'grpc-web';
import { StateServiceClient } from './proto/generated/Sim_serverServiceClientPb';
import { StartSimulationRequest, SimulationResultResponse, InitializeRequest, GridDimensions, StepRequest, WorldStateResponse } from './proto/generated/sim_server_pb';
import { mailbox } from './mailbox';

const stateService = new StateServiceClient('http://localhost:8080', null, null);


export function initWorldState(xMax, yMax, zMax,) {

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

export async function runSimulationLoop(worldStateId, rule, numSteps = 1) {
  const request = new StepRequest();
  request.setWorldStateId(worldStateId);
  request.setNumSteps(numSteps);
  request.setRule(rule);

  for (let i = 0; i < numSteps; i += 1) {
    await stateService.stepWorldStateForward(request).then(mailbox.setNewState);
  }
}

export function stopSimulation() {
  console.log("Stopping simulation...");
}

