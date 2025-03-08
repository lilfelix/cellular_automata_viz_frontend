import { BufferGeometry } from 'three';
import * as THREE from 'three';
import { FlyControls } from './FlyControls';
import { initWorldState } from '../client';
import { deserializeGridFromProto, mailbox } from '../mailbox';
import { WorldStateResponse } from '../proto/generated/sim_server_pb';

let container: HTMLDivElement;
let camera, scene, renderer, controls;
let controlsEnabled = false; // toggle freeze using space
let clock = new THREE.Clock(); // mutable clock allows reset

// Declare materials globally
let wireframeMaterial: THREE.MeshLambertMaterial;
let solidMaterial: THREE.MeshLambertMaterial;

// Store mesh objects, e.g. icosahedrons, in a 3D array
let meshGrid: THREE.LOD[][][];
let currentMeshGroup = new THREE.Group();
let meshGridHistory: THREE.Group[];
let meshGridHistoryUpdateCount = 0;

export function main(xMax, yMax, zMax, numHistoricalStates, numMaterialDetailLevels) {
  let grid: number[][][];

  const response: Promise<WorldStateResponse | void> = initWorldState(xMax, yMax, zMax);
  response.then(r => {
    grid = deserializeGridFromProto(r as WorldStateResponse);

    const geometry = [
      // [new THREE.IcosahedronGeometry(100, 16), 50],
      // [new THREE.IcosahedronGeometry(100, 8), 300],
      [new THREE.BoxGeometry(100, 100, 100, 1, 1, 1), 300],
      // [new THREE.IcosahedronGeometry(100, 4), 1000],
      // [new THREE.IcosahedronGeometry(100, 2), 2000],
      // [new THREE.IcosahedronGeometry(100, 1), 8000],
    ];
    // ].slice(numMaterialDetailLevels);
    init(grid, geometry, numHistoricalStates);
    AnimationLoop.start();
  });
}

export function clearGui() {
  for (const g of meshGridHistory) {
    removeObject3D(g);
  }
  removeObject3D(currentMeshGroup);
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }
  renderer.render(scene, camera);
  // Remove HTML element from document
  container.remove();

  meshGrid = [[[]]];
  meshGridHistory = [];
  meshGridHistoryUpdateCount = 0;
  currentMeshGroup = new THREE.Group();
}

function generateIcosahedronsFromGrid(geometry, grid: number[][][], NUM_HISTORICAL_STATES = 5) {
  const x_len = grid.length;
  const y_len = grid[0].length;
  const z_len = grid[0][0].length;
  const bitToMaterial = {
    0: wireframeMaterial,
    1: solidMaterial,
  }

  meshGridHistory = Array.from({ length: NUM_HISTORICAL_STATES }, () => new THREE.Group());
  meshGrid = new Array(x_len);
  for (let i = 0; i < x_len; i++) {
    meshGrid[i] = new Array(y_len);
    for (let j = 0; j < y_len; j++) {
      meshGrid[i][j] = new Array(z_len);
      for (let k = 0; k < z_len; k++) {
        const lod = new THREE.LOD();

        for (let l = 0; l < geometry.length; l++) {
          const mesh = new THREE.Mesh(geometry[l][0] as BufferGeometry, bitToMaterial[grid[i][j][k]]);
          mesh.scale.set(1.0, 1.0, 1.0); // Don't apply scale change to mesh
          mesh.updateMatrix();
          mesh.matrixAutoUpdate = false;
          lod.addLevel(mesh, geometry[l][1] as number);
        }

        lod.position.x = ((i) * 100); // Each cube side is 100 pixels
        lod.position.y = ((j) * 100);
        lod.position.z = ((k) * 100);
        lod.updateMatrix();
        lod.matrixAutoUpdate = false;
        currentMeshGroup.add(lod);
        scene.add(lod);

        // Store the LOD in the grid for later updates
        meshGrid[i][j][k] = lod;
        for (let h = 0; h < NUM_HISTORICAL_STATES; h++) {
          meshGridHistory[h].add(lod.clone(true));
        }
      }
    }
  }
  // Show coordinates
  const axesHelper = new THREE.AxesHelper(100);
  scene.add(axesHelper);

  // Add historical states to scene
  scene.add(...meshGridHistory);
}

function init(grid: number[][][] | undefined, geometry: any[][], numHistoricalStates = 5) {
  container = document.createElement('div');
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
  camera.position.x = 1000;
  camera.position.y = 1000;
  camera.position.z = 5000;

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 1, 20000);

  const pointLight = new THREE.PointLight(0xff2200);
  pointLight.position.set(0, 0, 0);
  scene.add(pointLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 0, 1).normalize();
  scene.add(dirLight);


  // Initialize materials
  wireframeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });
  solidMaterial = new THREE.MeshLambertMaterial({ color: 0xf1f1f1, wireframe: false, });

  if (grid) {
    generateIcosahedronsFromGrid(geometry, grid, numHistoricalStates);
  } else {
    throw new Error("Invalid grid!");
  }

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  controls = new FlyControls(camera, renderer.domElement);
  controls.movementSpeed = 1000;
  controls.rollSpeed = Math.PI / 10;
  // capture space key event BEFORE the controls,
  // then recreate the controls -- this resets some
  // internal fields used for damping, the only other
  // option to do this is to change the source code
  // of OrbitControls -- something that is strongly
  // discouraged to do... note, that this code only
  // works for canceling rotation, for panning you
  // have to add some more code to restore position
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      if (controlsEnabled) {
        controls.dispose();
      } else {
        controls = new FlyControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.movementSpeed = 1000;
        controls.rollSpeed = Math.PI / 10;
      }
      controlsEnabled = !controlsEnabled;
      controls.enabled = controlsEnabled;
    }
  }, { capture: true });

  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
  if (controlsEnabled) {
    controls.update(clock.getDelta());
  }
  if (mailbox.hasNewState) {
    const newGrid = mailbox.consumeNewState();
    updateIcosahedronStatesInScene(newGrid as number[][][]);
  }
  renderer.render(scene, camera);
}

function removeObject3D(object) {
  if (!object) return;

  // Remove children recursively
  while (object.children.length > 0) {
    removeObject3D(object.children[0]);
  }

  // Remove from parent
  if (object.parent) object.parent.remove(object);

  // Dispose geometry
  if (object.geometry) object.geometry.dispose();

  // Dispose materials (handle arrays for multi-material)
  if (object.material) {
    if (Array.isArray(object.material)) {
      object.material.forEach(mat => mat.dispose());
    } else {
      object.material.dispose();
    }
  }
}

function updateIcosahedronStatesInScene(grid: number[][][]) {
  const x_len = grid.length;
  const y_len = grid[0].length;
  const z_len = grid[0][0].length;

  // Preserve mesh state history using THREE.Group objects for timesteps
  // Oldest historical state is discarded
  // Second oldest is assigned to the oldest index etc
  const numHistoricalStatesKept = Math.min(meshGridHistoryUpdateCount, meshGridHistory.length - 1);
  for (let i = numHistoricalStatesKept; i > 0; i--) {
    meshGridHistory[i] = meshGridHistory[i - 1];
  }
  // Remove outdated historical state from scene and GPU memory
  if (numHistoricalStatesKept === meshGridHistory.length) {
    const oldestHistoricalStatesGroup: THREE.Group = meshGridHistory[meshGridHistory.length];
    removeObject3D(oldestHistoricalStatesGroup);
  }

  meshGridHistory[0] = new THREE.Group();
  for (let i = 0; i < x_len; i++) {
    for (let j = 0; j < y_len; j++) {
      for (let k = 0; k < z_len; k++) {
        const lod = meshGrid[i][j][k];

        // Save current state as most recent historical state before updating
        meshGridHistory[0].add(lod.clone(true));

        const state = grid[i][j][k];
        for (let l = 0; l < lod.levels.length; l++) {
          const mesh = lod.levels[l].object as THREE.Mesh;
          mesh.material = state === 1 ? solidMaterial : wireframeMaterial;
          mesh.material.needsUpdate = true; // ensure material updates
        }
      }
    }
  }
  scene.add(meshGridHistory[0]);
  offsetHistoricalStatesInScene(grid);

  if (meshGridHistoryUpdateCount < meshGridHistory.length) {
    meshGridHistoryUpdateCount += 1;
  }
}

function offsetHistoricalStatesInScene(grid: number[][][]) {
  const y_len = grid[0].length;
  const z_len = grid[0][0].length;
  const to3DIndex = (flat_index: number) => {
    const x = Math.floor(flat_index / (y_len * z_len));
    const y = Math.floor((flat_index % (y_len * z_len)) / z_len);
    const z = flat_index % z_len;
    return { x, y, z };
  };

  for (let i = 0; i < meshGridHistory.length; i++) {
    const group = meshGridHistory[i];
    const offset = (i + 1) * 100;
    for (let j = 0; j < group.children.length; j++) {
      const lod = group.children[j];
      if (i < meshGridHistoryUpdateCount) {
        lod.visible = true;
        const { x, y, z } = to3DIndex(j);
        lod.position.x = (x * 100); // Each cube side is 100 pixels
        lod.position.y = (y * 100 + offset);
        lod.position.z = (z * 100 - offset);
        lod.updateMatrix();
        lod.matrixAutoUpdate = false;
      } else {
        lod.visible = false;
      }
    }
  }
}

export const AnimationLoop = (() => {
  let requestId: number | null = null;
  let running = false;

  function loop() {
    if (!running) return;
    render();
    requestId = requestAnimationFrame(loop);
  }

  return {
    start() {
      if (!running) {
        running = true;
        loop();
      }
    },
    stop() {
      if (requestId !== null) {
        cancelAnimationFrame(requestId);
        requestId = null;
      }
      running = false;
    },
    reset() {
      this.stop();
      clock = new THREE.Clock();
    },
    isRunning() {
      return running;
    }
  };
})();