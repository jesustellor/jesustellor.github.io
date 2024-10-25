import * as THREE from 'three';

  const mypic = document.querySelector('#myPic');
  const matrix = document.querySelector('#matrix');
  const loader = new THREE.TextureLoader();
  const cubeTexture = loader.load('https://avatars.githubusercontent.com/u/22569672?s=400&u=4959806090e507fbb811869e5b8785eb015f6e66&v=4');
  cubeTexture.colorSpace = THREE.SRGBColorSpace;
  const circleTexture = loader.load('/images/matrixImage.png');
  circleTexture.colorSpace = THREE.SRGBColorSpace;
  const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true, canvas: mypic});
  const renderer2 = new THREE.WebGLRenderer({alpha: true, antialias: true, canvas: matrix});

  const fov = 75;
  const aspect = window.innerWidth / window.innerHeight;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 1.5;

  const fov2 = 75;
  const aspect2 = window.innerWidth / window.innerHeight;  // the canvas default
  const near2 = 0.1;
  const far2 = 5;
  const camera2 = new THREE.PerspectiveCamera(fov2, aspect2, near2, far2);
  camera2.position.z = 1;

  const squareScene = new THREE.Scene();
  const circleScene = new THREE.Scene();

  const cube = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({map: cubeTexture});
  const cubeMesh = new THREE.Mesh(cube, material);
  squareScene.add(cubeMesh);

  const circle = new THREE.SphereGeometry(0.5, 32, 32);
  const circleMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, map: circleTexture});
  const circleMesh = new THREE.Mesh(circle, circleMaterial);
  circleScene.add(circleMesh);

  // renderer.render(scene, camera);
  function render(time) {
    time *= 0.001;  // convert time to seconds
    time = time / 2;
    cubeMesh.rotation.x = time;
    cubeMesh.rotation.y = time;

    circleMesh.rotation.x = time;
    circleMesh.rotation.y = time;
   
    renderer.render(squareScene, camera);
    renderer2.render(circleScene, camera2);
   
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);