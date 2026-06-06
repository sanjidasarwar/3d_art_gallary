import * as THREE from 'three';

// scene
const scene = new THREE.Scene();

// size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

// camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000)
scene.add(camera);
camera.position.set(0, 0.5, 3);

// canvas
const target = document.querySelector('#app');
if (!target) {
  console.error("Canvas with ID 'app' not found!");
}

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: target
})
renderer.setSize(sizes.width, sizes.height);

// handle resize
window.addEventListener('resize', () => {
  // update sizes
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
})


// root point
const rootPoint = new THREE.Object3D();
scene.add(rootPoint);

// create basepoint 
const count = 6;
for(let i = 0; i < 6; i++) {
  const basePoint = new THREE.Object3D();
  basePoint.rotation.y = i * (Math.PI * 2 / count);
  rootPoint.add(basePoint);

  // add a basic cube to the scene
  const art = new THREE.Mesh(
    new THREE.BoxGeometry(3, 2, 0.15),
    new THREE.MeshBasicMaterial({
      color: "red",
    })
  );
  art.position.z = 4;
  basePoint.add(art);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
