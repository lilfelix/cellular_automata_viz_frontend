import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line
} from 'three';

(function main() {
  const { scene, camera, renderer } = setup()

  const cube = createCube();
  scene.add(cube);

  //create a blue LineBasicMaterial
  const material = new LineBasicMaterial({ color: 0x0000ff });
  const points: Vector3[] = [];
  points.push(new Vector3(- 10, 0, 0));
  points.push(new Vector3(0, 10, 0));
  points.push(new Vector3(10, 0, 0));

  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);
  scene.add(line);

  let zoomingIn = true;
  function animate() {
    requestAnimationFrame(animate);
    const actions = [
      (o => o.rotation.x += 0.01),
      (o => o.rotation.y += 0.01)
    ];

    const r = camera.position.z / 10;
    if (zoomingIn && r >= 1) {
      camera.position.z -= 0.3
      // camera.position.x += 0.01;
    } else if (zoomingIn) {
      zoomingIn = !zoomingIn;
    } else if (!zoomingIn && r < 3) {
      camera.position.z += 0.3
      camera.position.x -= 0.03;
    } else {
      zoomingIn = !zoomingIn;
    }
    actions.forEach(a => a(cube));
    renderer.render(scene, camera);
  };

  animate();

})();

function setup() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  camera.position.z = 30;

  return { scene, camera, renderer };
}

function createCube() {
  const geometry = new BoxGeometry();
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  return new Mesh(geometry, material);
}
