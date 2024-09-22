import { BufferGeometry } from 'three';
import * as THREE from 'three';
import { FlyControls } from './FlyControls';
import { initWorldState } from '../client';
import { Vector3D, WorldStateResponse } from '../proto/generated/sim_server_pb';


let container;

let camera, scene, renderer, controls;

const clock = new THREE.Clock();

function main() {
  // undefined will generate random icosahedrons. Response will overwrite
  let grid: number[][][];

  const response: Promise<WorldStateResponse | void> = initWorldState();
  response.then(r => {
    if (!!r && r.hasState()) {
      const state = r.getState() as Vector3D;
      grid = [];
      for (const vec2D of state.getVec2dList()) {
        const list2D: number[][] = [];
        grid.push(list2D);
        for (const list1D of vec2D.getVec1dList()) {
          list2D.push(list1D.getBitList());
        }
      }
    } else {
      console.log(`Coulnd't parse state from response. Will initialize state randomly`);
    }
    init(grid);
    animate();
  })

}

main();


// grid: 3D array of <x,y,z> coordinates
function generateIcosahedronsFromGrid(geometry, material, grid: number[][][]) {
  const x_len = grid.length;
  const y_len = grid[0].length;
  const z_len = grid[0][0].length;
  for (let i = 0; i < x_len; i++) {
    for (let j = 0; j < y_len; j++) {
      for (let k = 0; k < z_len; k++) {

        const lod = new THREE.LOD();

        for (let l = 0; l < geometry.length; l++) {
          const mesh = new THREE.Mesh(geometry[l][0] as BufferGeometry, material);
          mesh.scale.set(1.5, 1.5, 1.5);
          mesh.updateMatrix();
          mesh.matrixAutoUpdate = false;
          lod.addLevel(mesh, geometry[l][1] as number);
        }

        lod.position.x = i - Math.floor(x_len / 2);
        lod.position.y = j - Math.floor(y_len / 2);
        lod.position.z = k - Math.floor(z_len / 2);
        lod.updateMatrix();
        lod.matrixAutoUpdate = false;
        scene.add(lod);
      }
    }
  }
}

function generateRandomIcosahedrons(geometry, material) {
  for (let j = 0; j < 1000; j++) {

    const lod = new THREE.LOD();

    for (let i = 0; i < geometry.length; i++) {

      const mesh = new THREE.Mesh(geometry[i][0] as BufferGeometry, material);
      mesh.scale.set(1.5, 1.5, 1.5);
      mesh.updateMatrix();
      mesh.matrixAutoUpdate = false;
      lod.addLevel(mesh, geometry[i][1] as number);

    }

    lod.position.x = 10000 * (0.5 - Math.random());
    lod.position.y = 7500 * (0.5 - Math.random());
    lod.position.z = 10000 * (0.5 - Math.random());
    lod.updateMatrix();
    lod.matrixAutoUpdate = false;
    scene.add(lod);
  }
}

function init(grid: number[][][] | undefined) {

  container = document.createElement('div');
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 15000);
  camera.position.z = 1000;

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 1, 15000);

  const pointLight = new THREE.PointLight(0xff2200);
  pointLight.position.set(0, 0, 0);
  scene.add(pointLight);

  const dirLight = new THREE.DirectionalLight(0xffffff);
  dirLight.position.set(0, 0, 1).normalize();
  scene.add(dirLight);

  const geometry = [

    [new THREE.IcosahedronGeometry(100, 16), 50],
    [new THREE.IcosahedronGeometry(100, 8), 300],
    [new THREE.IcosahedronGeometry(100, 4), 1000],
    [new THREE.IcosahedronGeometry(100, 2), 2000],
    [new THREE.IcosahedronGeometry(100, 1), 8000]

  ];

  const material = new THREE.MeshLambertMaterial({ color: 0xffffff, wireframe: true });

  if (grid) {
    generateIcosahedronsFromGrid(geometry, material, grid);
  } else {
    generateRandomIcosahedrons(geometry, material);
  }

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  //

  controls = new FlyControls(camera, renderer.domElement);
  controls.movementSpeed = 1000;
  controls.rollSpeed = Math.PI / 10;

  //

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

  controls.update(clock.getDelta());

  renderer.render(scene, camera);

}

