// src/index.ts

// Import your main application code
import './lod/index.ts'; // Adjust the path if necessary

import { main } from './lod/index';

// Import client functions
import { initWorldState, stepWorldStateForward, runSimulationLoop, stopSimulation } from './client';
import { WorldStateResponse } from './proto/generated/sim_server_pb';

const RULE = "ZwH77PdKcK5IwoRFbxFeEg==";
const DIM = 14;
const NUM_MATERIAL_DETAIL_LEVELS = 1;

// Attach functions to the global window object for HTML buttons
(window as any).resetWorldState = () => {
    initWorldState(DIM, DIM, DIM).then(r => {
        const counterDiv = window.document.getElementById('counter');
        if (counterDiv) {
            counterDiv.innerHTML = "0";
        }
    });
};
(window as any).stepWorldStateForward = () => {
    stepWorldStateForward((window as any).worldStateId, RULE, 1).then(r => {
        const counterDiv = window.document.getElementById('counter');
        if (counterDiv) {
            counterDiv.innerHTML = `${(r as WorldStateResponse).getMetadata()?.getStep()}`;
        }
    });
};
(window as any).runSimulationLoop = () => runSimulationLoop((window as any).worldStateId, RULE, 100000);
(window as any).stopSimulation = stopSimulation;

main(DIM, DIM, DIM, NUM_MATERIAL_DETAIL_LEVELS);