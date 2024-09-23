import * as grpcWeb from 'grpc-web';
import { StateServiceClient } from './proto/generated/Sim_serverServiceClientPb';
import { StartSimulationRequest, SimulationResultResponse, InitializeRequest, GridDimensions, StepRequest, WorldStateResponse } from './proto/generated/sim_server_pb';
import { mailbox } from './mailbox';

const RULE = "ZwH77PdKcK5IwoRFbxFeEg==";
const stateService = new StateServiceClient('http://localhost:8080', null, null);


export function initWorldState() {

  const request = new InitializeRequest();
  const dims = new GridDimensions();
  dims.setXMax(10);
  dims.setYMax(10);
  dims.setZMax(10);
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

export function stepWorldStateForward(worldStateId: number) {
  const request = new StepRequest();
  request.setNumSteps(1);
  request.setRule(RULE);
  request.setWorldStateId(worldStateId);


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

export function startSimulation() {
  const request = new StartSimulationRequest();

  const initReq = new InitializeRequest();
  const dims = new GridDimensions();
  dims.setXMax(10);
  dims.setYMax(10);
  dims.setZMax(10);
  initReq.setDimensions(dims);

  const stepReq = new StepRequest();
  stepReq.setNumSteps(1000);
  stepReq.setRule(RULE);

  request.setTimeout(5);
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

// Attach the functions to the global window object so they can be accessed from HTML
(window as any).startSimulation = startSimulation;
(window as any).initWorldState = initWorldState;
(window as any).stepWorldStateForward = () => stepWorldStateForward((window as any).worldStateId);
(window as any).stopSimulation = stopSimulation;