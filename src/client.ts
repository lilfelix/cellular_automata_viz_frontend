import * as grpcWeb from 'grpc-web';
import { StateServiceClient } from './proto/generated/Sim_serverServiceClientPb';
import { StartSimulationRequest, SimulationResultResponse, InitializeRequest, GridDimensions, StepRequest, WorldStateResponse } from './proto/generated/sim_server_pb';
import { mailbox } from './mailbox';

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
      console.log(`Received response: ${response.getMetadata()?.getStatus()}`);
      // mailbox.setNewState(response);
      return response;
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
    });
}

function stepWorldStateForward() {
  const request = new StepRequest();
  request.setNumSteps(1000);
  request.setRule("ASNFZ4mrze8BI0VniavN7w==");


  return stateService.stepWorldStateForward(request)
    .then((response: WorldStateResponse) => {
      console.log(`Received response: ${response.getMetadata()?.getStatus()}`);
      mailbox.setNewState(response);
      return response;
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
    });
}

function startSimulation() {
  const request = new StartSimulationRequest();

  const initReq = new InitializeRequest();
  const dims = new GridDimensions();
  dims.setXMax(10);
  dims.setYMax(10);
  dims.setZMax(10);
  initReq.setDimensions(dims);

  const stepReq = new StepRequest();
  stepReq.setNumSteps(1000);
  stepReq.setRule("ASNFZ4mrze8BI0VniavN7w==");

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

function stopSimulation() {
  console.log("Stopping simulation...");
}

// Attach the functions to the global window object so they can be accessed from HTML
(window as any).startSimulation = startSimulation;
(window as any).initWorldState = initWorldState;
(window as any).stepWorldStateForward = stepWorldStateForward;
(window as any).stopSimulation = stopSimulation;