import * as grpcWeb from 'grpc-web';
import { StateServiceClient } from './proto/generated/Sim_serverServiceClientPb';
import { StartSimulationRequest, SimulationResultResponse, InitializeRequest, GridDimensions, StepRequest, WorldStateResponse } from './proto/generated/sim_server_pb';
import { mailbox } from './mailbox';

const stateService = new StateServiceClient('http://localhost:8080', null, null);


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

export function startSimulation(rule, xMax, yMax, zMax, numSteps=1, timeout=5) {
  const request = new StartSimulationRequest();

  const initReq = new InitializeRequest();
  const dims = new GridDimensions();
  dims.setXMax(xMax);
  dims.setYMax(yMax);
  dims.setZMax(zMax);
  initReq.setDimensions(dims);

  const stepReq = new StepRequest();
  stepReq.setNumSteps(numSteps);
  stepReq.setRule(rule);

  request.setTimeout(timeout);
  request.setInitReq(initReq);
  request.setStepReq(stepReq);

  return stateService.startSimulation(request)
    .then((response: SimulationResultResponse) => {
      console.log(`Received response: ${response.getStateChangedDuringSim()}`);
      return response;
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
    });
}

export function stopSimulation() {
  console.log("Stopping simulation...");
}

