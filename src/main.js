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
  console.error("Canvas with ID 'dd' not found!");
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




function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
