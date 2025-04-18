import './lod/index.ts';
import { main, clearGui, AnimationLoop } from './lod/index';
import { ruleNumberOnChange, stepWorldStateForward, runSimulationLoop, stopSimulation, updateRuleInFrontend } from './client';
import { WorldStateResponse } from './proto/generated/sim_server_pb';

const DEFAULT_RULE = "AAABAAEAAAABAAEAAAAAAA=="; // Rule 30. Overridable via GUI
const NUM_DIMS = 100;
const NUM_MATERIAL_DETAIL_LEVELS = 1;
const NUM_SIM_LOOP_STEPS = 100000;
const NUM_MILLISECONDS_SLEEP_PER_STEP = 10;
const NUM_HISTORICAL_STATES = 100;

updateRuleInFrontend(30, DEFAULT_RULE);

// Attach functions to the global window object for HTML buttons
(window as any).rule = DEFAULT_RULE;
(window as any).resetWorldState = () => {
    AnimationLoop.reset();
    const counterDiv = window.document.getElementById('counter');
    if (counterDiv) {
        counterDiv.innerHTML = "0";
    }
    clearGui();
    main(NUM_DIMS, 1, 1, NUM_HISTORICAL_STATES, NUM_MATERIAL_DETAIL_LEVELS);
};

(window as any).stepWorldStateForward = () => {
    stepWorldStateForward((window as any).worldStateId, (window as any).rule, 1).then(r => {
        const counterDiv = window.document.getElementById('counter');
        if (counterDiv) {
            counterDiv.innerHTML = `${(r as WorldStateResponse).getMetadata()?.getStep()}`;
        }
    });
};
(window as any).runSimulationLoop = () => runSimulationLoop(
    (window as any).worldStateId,
    (window as any).rule,
    NUM_SIM_LOOP_STEPS,
    NUM_MILLISECONDS_SLEEP_PER_STEP
);
(window as any).stopSimulation = stopSimulation;
(window as any).ruleNumberOnChange = (value) => {
    ruleNumberOnChange((window as any).worldStateId, value);
};

main(NUM_DIMS, 1, 1, NUM_HISTORICAL_STATES, NUM_MATERIAL_DETAIL_LEVELS);
// main(NUM_DIMS, NUM_DIMS, NUM_DIMS, NUM_MATERIAL_DETAIL_LEVELS);