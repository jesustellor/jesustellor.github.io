import * as THREE from 'three';

import {OrbitControls} from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

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
const material = new THREE.MeshStandardMaterial({color: 0x00ff00});
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);

const light = new THREE.PointLight(0xffffff);
const ambientLight = new THREE.AmbientLight(0xffffff);
light.position.set(8,8,8);
scene.add(light, ambientLight);

const lightHelper = new THREE.PointLightHelper(light);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('/images/cosmos-1853491_1280.jpg');

scene.background = spaceTexture;

function animate() {
    requestAnimationFrame(animate);

    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;

    controls.update();

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
}

animate();