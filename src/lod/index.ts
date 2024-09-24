import { BufferGeometry } from 'three';
import * as THREE from 'three';
import { FlyControls } from './FlyControls';
import { initWorldState } from '../client';
import { deserializeGridFromProto, mailbox } from '../mailbox';
import { WorldStateResponse } from '../proto/generated/sim_server_pb';

let container;
let camera, scene, renderer, controls;
let controlsEnabled = false; // toggle freeze using space
const clock = new THREE.Clock();

// Declare materials globally
let wireframeMaterial: THREE.MeshLambertMaterial;
let solidMaterial: THREE.MeshLambertMaterial;

// Store icosahedrons in a 3D array
let icosahedronGrid: THREE.LOD[][][];

export function main(xMax, yMax, zMax, numMaterialDetailLevels) {
  let grid: number[][][];

  const response: Promise<WorldStateResponse | void> = initWorldState(xMax, yMax, zMax);
  response.then(r => {
    grid = deserializeGridFromProto(r as WorldStateResponse);
    init(grid, numMaterialDetailLevels);
    animate();
  });
}

function generateIcosahedronsFromGrid(geometry, grid: number[][][]) {
  const x_len = grid.length;
  const y_len = grid[0].length;
  const z_len = grid[0][0].length;
  const bitToMaterial = {
    0: wireframeMaterial,
    1: solidMaterial,
  }

  icosahedronGrid = new Array(x_len);
  for (let i = 0; i < x_len; i++) {
    icosahedronGrid[i] = new Array(y_len);
    for (let j = 0; j < y_len; j++) {
      icosahedronGrid[i][j] = new Array(z_len);
      for (let k = 0; k < z_len; k++) {
        const lod = new THREE.LOD();

        for (let l = 0; l < geometry.length; l++) {
          const mesh = new THREE.Mesh(geometry[l][0] as BufferGeometry, bitToMaterial[grid[i][j][k]]);
          mesh.scale.set(1.5, 1.5, 1.5);
          mesh.updateMatrix();
          mesh.matrixAutoUpdate = false;
          lod.addLevel(mesh, geometry[l][1] as number);
        }

        const x_scale = 10000 / x_len;
        const y_scale = 10000 / y_len;
        const z_scale = 10000 / z_len;
        lod.position.x = ((i + 1) * x_scale) - 5000;
        lod.position.y = ((j + 1) * y_scale) - 5000;
        lod.position.z = ((k + 1) * z_scale) - 5000;
        lod.updateMatrix();
        lod.matrixAutoUpdate = false;
        scene.add(lod);
        // Show coordinates
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

        // Store the LOD in the grid for later updates
        icosahedronGrid[i][j][k] = lod;
      }
    }
  }
}

function init(grid: number[][][] | undefined, numMaterialDetailLevels = 2) {
  container = document.createElement('div');
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
  camera.position.x = 1000;
  camera.position.y = 1000;
  camera.position.z = 15000;

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 1, 20000);

  const pointLight = new THREE.PointLight(0xff2200);
  pointLight.position.set(0, 0, 0);
  scene.add(pointLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 0, 1).normalize();
  scene.add(dirLight);

  const geometry = [
    // [new THREE.IcosahedronGeometry(100, 16), 50],
    [new THREE.IcosahedronGeometry(100, 8), 300],
    // [new THREE.IcosahedronGeometry(100, 4), 1000],
    // [new THREE.IcosahedronGeometry(100, 2), 2000],
    // [new THREE.IcosahedronGeometry(100, 1), 8000],
  ];
  // ].slice(numMaterialDetailLevels);

  // Initialize materials
  wireframeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });
  solidMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000, wireframe: false });

  if (grid) {
    generateIcosahedronsFromGrid(geometry, grid);
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
  window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      controlsEnabled = !controlsEnabled;
      controls.enabled = controlsEnabled;
    }
  });

  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  render();
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

function updateIcosahedronStatesInScene(grid: number[][][]) {
  const x_len = grid.length;
  const y_len = grid[0].length;
  const z_len = grid[0][0].length;
  for (let i = 0; i < x_len; i++) {
    for (let j = 0; j < y_len; j++) {
      for (let k = 0; k < z_len; k++) {
        const lod = icosahedronGrid[i][j][k];
        const state = grid[i][j][k];

        for (let l = 0; l < lod.levels.length; l++) {
          const mesh = lod.levels[l].object as THREE.Mesh;
          mesh.material = state === 1 ? solidMaterial : wireframeMaterial;
          mesh.material.needsUpdate = true; // ensure material updates
        }
      }
    }
  }
}