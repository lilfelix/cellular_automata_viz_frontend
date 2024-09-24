// src/index.ts

// Import your main application code
import './lod/index.ts'; // Adjust the path if necessary

import { main } from './lod/index';

// Import client functions
import { initWorldState, stepWorldStateForward, runSimulationLoop, stopSimulation } from './client';
import { WorldStateResponse } from './proto/generated/sim_server_pb';

const RULE = "ZwH77PdKcK5IwoRFbxFeEg==";
const NUM_DIMS = 14;
const NUM_MATERIAL_DETAIL_LEVELS = 1;
const NUM_SIM_LOOP_STEPS = 100000;
const NUM_MILLISECONDS_SLEEP_PER_STEP = 400;

// Attach functions to the global window object for HTML buttons
(window as any).resetWorldState = () => {
    initWorldState(NUM_DIMS, NUM_DIMS, NUM_DIMS).then(r => {
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
(window as any).runSimulationLoop = () => runSimulationLoop(
    (window as any).worldStateId,
    RULE,
    NUM_SIM_LOOP_STEPS,
    NUM_MILLISECONDS_SLEEP_PER_STEP
);
(window as any).stopSimulation = stopSimulation;

main(NUM_DIMS, NUM_DIMS, NUM_DIMS, NUM_MATERIAL_DETAIL_LEVELS);