// variables for setup

let container;  // on html page
let camera;
let renderer; // renders 3D
let scene; // 3D world scene
let car;


// function

function init(){
  container = document.querySelector('.scene');

  //SCENE
  // create scene via three.min.js
  scene = new THREE.Scene();

  // set field of view (what user sees) - set to 35%
  const fov = 35;

  // set aspect
  const aspect = container.clientWidth / container.clientHeight;

  // set clipping limit along z axis (in metres) - model will disappear if out of this range
  const near = 0.1;
  const far = 1000;


  //CAMERA
  // set up camera vua three.min.js
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  // position of camera x, y, z - depends on model size
  camera.position.set(0, 2, 20);


  //LIGHT
  // ambient via three.min.js - pass colour as param and amount of light
  const ambient = new THREE.AmbientLight(0x404040, 3);
  scene.add(ambient);

  //directional
  const light = new THREE.DirectionalLight(0xffffff, 2);
  //set position
  light.position.set(10, 10, 10);
  scene.add(light);

  //RENDERER
  // set up renderer - add antialias object which blurs the edges of model to avoid pixelation
  //alpha removes default background and allows addition of custom background
  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});

  // set render scope to full client page
  renderer.setSize(container.clientWidth, container.clientHeight);

  // set pixel ratio
  renderer.setPixelRatio(window.devicePixelRatio);

  //adds canvas with camera, scene, renderer to html page
  container.appendChild(renderer.domElement);


  // MODEL
  // load model
  let loader = new THREE.GLTFLoader();

  // gltf param in functions (from 3d_model) gives access to model data
  loader.load('./3d/scene.gltf', function(gltf) {

    // add model to scene
    scene.add(gltf.scene);

    //get model
    house = gltf.scene.children[0];

    //call animate function
    animate()
  });
}


function animate() {

  //function runs in loop when called by loader
  requestAnimationFrame(animate);

  // set rotation around z
  house.rotation.z += 0.005;

  //render animation
  renderer.render(scene, camera);
}


init()
