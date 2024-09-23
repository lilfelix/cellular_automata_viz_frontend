// src/index.ts

// Import your main application code
import './lod/index.ts'; // Adjust the path if necessary

// Import client functions
import { initWorldState, stepWorldStateForward, startSimulation, stopSimulation } from './client';

// Attach functions to the global window object for HTML buttons
(window as any).initWorldState = initWorldState;
(window as any).stepWorldStateForward = () => stepWorldStateForward((window as any).worldStateId);
(window as any).startSimulation = startSimulation;
(window as any).stopSimulation = stopSimulation;