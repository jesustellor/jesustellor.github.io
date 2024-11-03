import * as THREE from 'three';

const scene = new THREE.Scene();
const canvas = document.querySelector('#matrix');

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({canvas});


camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);

function animate() {
    requestAnimationFrame(animate);

    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
}

animate();