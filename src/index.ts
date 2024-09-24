// src/index.ts

// Import your main application code
import './lod/index.ts'; // Adjust the path if necessary

import { main } from './lod/index';

// Import client functions
import { initWorldState, stepWorldStateForward, startSimulation, stopSimulation } from './client';

const RULE = "ZwH77PdKcK5IwoRFbxFeEg==";

// Attach functions to the global window object for HTML buttons
(window as any).initWorldState = () => initWorldState(20, 20, 20);
(window as any).stepWorldStateForward = () => stepWorldStateForward((window as any).worldStateId, RULE, 1);
(window as any).startSimulation = () => startSimulation(RULE, 20, 20, 20);
(window as any).stopSimulation = stopSimulation;

const dim = 14;
const numMaterialDetailLevels = 1;
main(dim, dim, dim, numMaterialDetailLevels);