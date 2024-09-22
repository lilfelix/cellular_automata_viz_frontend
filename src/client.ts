import * as grpcWeb from 'grpc-web';
import { StateServiceClient } from './proto/generated/Sim_serverServiceClientPb';
import { StartSimulationRequest, SimulationResultResponse, InitializeRequest, GridDimensions, StepRequest } from './proto/generated/sim_server_pb';

const stateService = new StateServiceClient('http://localhost:8080', null, null);

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

  stateService.startSimulation(request)
    .then((response: SimulationResultResponse) => {
      console.log(`Received response: ${response.getStateChangedDuringSim()}`);
    })
    .catch((err: grpcWeb.RpcError) => {
      console.log(`Received error: ${err.code}, ${err.message}`);
    });
}

// Attach the function to the global window object so it can be accessed from HTML
(window as any).startSimulation = startSimulation;