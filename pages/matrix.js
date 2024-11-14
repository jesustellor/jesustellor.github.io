import * as THREE from 'three';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const canvas = document.querySelector('#matrix');

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({canvas});


const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0x00ff00});
const circle = new THREE.Mesh(geometry, material);
scene.add(circle);

const light = new THREE.PointLight(0xffffff);
const ambientLight = new THREE.AmbientLight(0xffffff);
light.position.set(8,8,8);
scene.add(light, ambientLight);

const lightHelper = new THREE.PointLightHelper(light);
const gridHelper = new THREE.GridHelper(100, 20);
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

    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        const scrollY = window.scrollY;
        // Update Three.js scene here
        camera.position.setZ(scrollY * 0.1);
        camera.position.setX(scrollY * 0.01);
        camera.position.setY(scrollY * 0.01);
        // camera.position.z = scrollY * 0.1;
        // camera.position.x = scrollY * 0.01;
        // camera.position.y = scrollY * 0.01;

    })

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);
}

animate();

window.addEventListener('scroll', () => {
    // Your code to update the Three.js scene based on scroll position
    // For example, you might want to move the camera or update objects
    const scrollY = window.scrollY;
    // Update Three.js scene here
});