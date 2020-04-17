// variables for setup

let container;  // on html page
let camera;
let renderer; // renders 3D
let scene; // 3D world scene
let car;


// function

function init(){
  container = document.querySelector('.scene');

  // create scene via three.min.js
  scene = new THREE.Scene();

  // set field of view (what user sees) - set to 35%
  const fov = 35;

  // set aspect
  const aspect = container.clientWidth / container.clientHeight;

  // set clipping limit along z axis (in metres) - model will disappear if out of this range
  const near = 0.1;
  const far = 500;

  // set up camera vua three.min.js
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  // position of camera x, y, z - depends on model size
  camera.position.set(-50, 40, 350);

  // load model
  let loader = new THREE.GLTF();

  // gltf param in functions (from 3d_model) gives access to model data
  loader.load('./3d_model/scene.glft', function(gltf) {

    // add model to scene
    scene.add(glft.scene);
  });



}
