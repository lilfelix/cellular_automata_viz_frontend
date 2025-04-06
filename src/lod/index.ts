import * as THREE from 'three';
import { FlyControls } from './FlyControls';
import { initWorldState } from '../client';
import { deserializeGridFromProto, mailbox } from '../mailbox';
import { WorldStateResponse } from '../proto/generated/sim_server_pb';

const cubeLen = 50; // Cube side length
let container: HTMLDivElement;
let camera, scene, renderer, controls;
let controlsEnabled = false; // toggle freeze using space
let clock = new THREE.Clock(); // mutable clock allows reset

// Declare materials globally
const wireframeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });
const solidMaterial = new THREE.MeshLambertMaterial({ color: 0xf1f1f1, wireframe: false, });

let currentInstancedMeshSolid: THREE.InstancedMesh;
let currentInstancedMeshWireframe: THREE.InstancedMesh;

// Show coordinates of object hovered over by mouse
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const hoverLabel = document.getElementById('hover-label') as HTMLElement;

// Store mesh objects, e.g. icosahedrons, in a 3D array
type InstancedMesh = THREE.InstancedMesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>;
type InstancedMeshTuple = { solid: InstancedMesh; wireframe: InstancedMesh };
let meshGridHistory: InstancedMeshTuple[];
let meshGridHistoryUpdateCount = 0;

export function main(xMax, yMax, zMax, numHistoricalStates, numMaterialDetailLevels) {
  let grid: number[][][];

  const response: Promise<WorldStateResponse | void> = initWorldState(xMax, yMax, zMax);
  response.then(r => {
    grid = deserializeGridFromProto(r as WorldStateResponse);

    const geometry = [
      // [new THREE.IcosahedronGeometry(cubeLen, 16), 50],
      // [new THREE.IcosahedronGeometry(cubeLen, 8), 300],
      [new THREE.BoxGeometry(cubeLen, cubeLen, cubeLen, 1, 1, 1), 300],
      // [new THREE.IcosahedronGeometry(cubeLen, 4), 1000],
      // [new THREE.IcosahedronGeometry(cubeLen, 2), 2000],
      // [new THREE.IcosahedronGeometry(cubeLen, 1), 8000],
    ];
    // ].slice(numMaterialDetailLevels);
    init(grid, geometry, numHistoricalStates);
    AnimationLoop.start();
  });
}

export function clearGui() {
  for (const { solid, wireframe } of meshGridHistory) {
    removeInstancedMesh(solid);
    removeInstancedMesh(wireframe);
  }
  removeInstancedMesh(currentInstancedMeshSolid);
  removeInstancedMesh(currentInstancedMeshWireframe);
  while (scene.children?.length > 0) {
    scene.remove(scene.children[0]);
  }
  renderer.render(scene, camera);
  // Remove HTML element from document
  container.remove();

  meshGridHistory = [];
  meshGridHistoryUpdateCount = 0;
}

function generateInstancedGrid(geometry: any[][], grid: number[][][], NUM_HISTORICAL_STATES = 5) {
  const x_len = grid.length;
  const y_len = grid[0].length;
  const z_len = grid[0][0].length;

  let solidCount = 0, wireframeCount = 0;
  for (let i = 0; i < x_len; i++) {
    for (let j = 0; j < y_len; j++) {
      for (let k = 0; k < z_len; k++) {
        if (grid[i][j][k] === 1) {
          solidCount++;
        } else {
          wireframeCount++;
        }
      }
    }
  }

  const instancedMeshSolid = new THREE.InstancedMesh(geometry[0][0], solidMaterial, solidCount);
  const instancedMeshWireframe = new THREE.InstancedMesh(geometry[0][0], wireframeMaterial, wireframeCount);

  meshGridHistory = Array.from({ length: NUM_HISTORICAL_STATES }, () => ({
    solid: null as any as THREE.InstancedMesh,
    wireframe: null as any as THREE.InstancedMesh,
  }));

  const dummy = new THREE.Object3D();
  let solidIndex = 0, wireframeIndex = 0;
  for (let i = 0; i < x_len; i++) {
    for (let j = 0; j < y_len; j++) {
      for (let k = 0; k < z_len; k++) {
        dummy.position.set(
          (i - x_len / 2) * cubeLen,
          (j - y_len / 2) * cubeLen,
          (k - z_len / 2) * cubeLen,
        );
        dummy.updateMatrix();
        if (grid[i][j][k] === 1) {
          instancedMeshSolid.setMatrixAt(solidIndex++, dummy.matrix);
        } else {
          instancedMeshWireframe.setMatrixAt(wireframeIndex++, dummy.matrix);
        }
      }
    }
  }

  instancedMeshSolid.instanceMatrix.needsUpdate = true;
  instancedMeshWireframe.instanceMatrix.needsUpdate = true;

  // These will be added to scene on first update (when receiving initial state from backend)
  currentInstancedMeshSolid = instancedMeshSolid;
  currentInstancedMeshWireframe = instancedMeshWireframe;

  // Show coordinate axes
  const axesHelper = new THREE.AxesHelper(cubeLen);
  scene.add(axesHelper);

  // Add historical states to scene. They're initialized as null
  for (const { solid, wireframe } of meshGridHistory) {
    if (solid && wireframe) scene.add(solid, wireframe);
  }
}

function init(grid: number[][][], geometry: any[][], numHistoricalStates = 5) {
  container = document.createElement('div');
  document.body.appendChild(container);

  const xMax = grid.length;
  const yMax = grid[0]?.length ?? 1;
  const zMax = grid[0]?.[0]?.length ?? 1;

  // Compute a suitable distance from the center, scaled by grid size
  const maxDim = Math.max(xMax, yMax, zMax);
  const distance = maxDim * 2.5;
  const center = new THREE.Vector3(0, 0, 0);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 20000);
  const offsetDirection = new THREE.Vector3(1, 1, 1).normalize();
  const cameraDistance = maxDim * cubeLen; // Use world units matching cube size
  camera.position.copy(offsetDirection.multiplyScalar(cameraDistance));
  camera.lookAt(center);

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 1, distance * 1000);

  const pointLight = new THREE.PointLight(0xff2200, 1, 0);
  pointLight.position.set(center.x, center.y, center.z);
  scene.add(pointLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
  dirLight.position.set(1, 1, 1).normalize();
  scene.add(dirLight);

  if (grid) {
    generateInstancedGrid(geometry, grid, numHistoricalStates);
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

  // Get coordinates of mouse
  window.addEventListener('mousemove', (event) => {
    // Convert screen to NDC [-1, 1]
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });
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
    updateInstancedGrid(newGrid as number[][][]);
  }
  renderer.render(scene, camera);
}

function removeInstancedMesh(mesh: THREE.InstancedMesh, dispose = false) {
  if (!mesh) return;

  // Remove from parent
  if (mesh.parent) mesh.parent.remove(mesh);

  // Dispose geometry
  if (mesh.geometry && dispose) mesh.geometry.dispose();

  // Dispose materials (handle arrays for multi-material)
  if (mesh.material && dispose) {
    if (Array.isArray(mesh.material)) {
      mesh.material.forEach(mat => mat.dispose());
    } else {
      mesh.material.dispose();
    }
  }
}

function updateInstancedGrid(grid: number[][][]) {
  const x_len = grid.length;
  const y_len = grid[0].length;
  const z_len = grid[0][0].length;

  // Add current state as most recent historical snapshot
  meshGridHistory.unshift({
    solid: currentInstancedMeshSolid,
    wireframe: currentInstancedMeshWireframe,
  });
  const removed = meshGridHistory.pop();
  if (removed) {
    removeInstancedMesh(removed.solid);
    removeInstancedMesh(removed.wireframe);
  }

  offsetHistoricalStatesInScene();

  let solidCount = 0, wireframeCount = 0;
  for (let i = 0; i < x_len; i++) {
    for (let j = 0; j < y_len; j++) {
      for (let k = 0; k < z_len; k++) {
        if (grid[i][j][k] === 1) {
          solidCount++;
        } else {
          wireframeCount++;
        }
      }
    }
  }

  const newSolidMesh = new THREE.InstancedMesh(currentInstancedMeshSolid.geometry, solidMaterial, solidCount);
  const newWireframeMesh = new THREE.InstancedMesh(currentInstancedMeshWireframe.geometry, wireframeMaterial, wireframeCount);

  const dummy = new THREE.Object3D();
  let solidIndex = 0, wireframeIndex = 0;
  for (let i = 0; i < x_len; i++) {
    for (let j = 0; j < y_len; j++) {
      for (let k = 0; k < z_len; k++) {
        dummy.position.set(
          (i - x_len / 2) * cubeLen,
          (j - y_len / 2) * cubeLen,
          (k - z_len / 2) * cubeLen,
        );
        dummy.updateMatrix();
        if (grid[i][j][k] === 1) {
          newSolidMesh.setMatrixAt(solidIndex++, dummy.matrix);
        } else {
          newWireframeMesh.setMatrixAt(wireframeIndex++, dummy.matrix);
        }
      }
    }
  }

  newSolidMesh.count = solidCount;
  newSolidMesh.instanceMatrix.needsUpdate = true;
  newSolidMesh.material.needsUpdate = true;
  newWireframeMesh.count = wireframeCount;
  newWireframeMesh.instanceMatrix.needsUpdate = true;
  newWireframeMesh.material.needsUpdate = true;

  currentInstancedMeshSolid = newSolidMesh;
  currentInstancedMeshWireframe = newWireframeMesh;

  scene.add(currentInstancedMeshSolid, currentInstancedMeshWireframe);
}

function offsetHistoricalStatesInScene() {
  for (let i = 0; i < meshGridHistory.length; i++) {
    const vector_offset = new THREE.Vector3(0, cubeLen, -1 * cubeLen);
    const { solid, wireframe } = meshGridHistory[i];
    solid?.position.add(vector_offset);
    wireframe?.position.add(vector_offset);
  }
}

function getMouseHoverObjects() {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    // point returns the position relative to its parent, e.g. a THREE.Group.
    const { x, y, z } = intersects[0].point;
    hoverLabel.innerText = `Hover: x=${x.toFixed(2)} y=${y.toFixed(2)} z=${z.toFixed(2)}`;
  } else {
    hoverLabel.innerText = `Hover: -`;
  }
}

export const AnimationLoop = (() => {
  let requestId: number | null = null;
  let running = false;

  function loop() {
    if (!running) return;
    render();
    getMouseHoverObjects();
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