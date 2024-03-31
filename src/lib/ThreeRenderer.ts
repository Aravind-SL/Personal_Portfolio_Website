import * as THREE from 'three';
import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader.js';
import { ShaderPass } from 'three/examples/jsm/Addons.js';
import { EffectComposer, RenderPass, UnrealBloomPass } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.SphereGeometry(  );
const material = new THREE.MeshLambertMaterial( {
  color: 0xffffff ,
  emissive: 0x666666,
  emissiveIntensity: 0.4,
} );
const ambientLight = new THREE.AmbientLight(0x444444);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight( 0xdfdfb5, 1.7 );
scene.add( directionalLight );
directionalLight.position.set(0.7, 0, 0.5);

const spheres: number[] = [];
const selection = new THREE.Group();

const pointLight = new THREE.PointLight(
  0xffffff,
  200.0,
  500.0
)

scene.background = new THREE.Color(0x110222);
scene.fog = new THREE.FogExp2(
  0xffffff,
  0.000001
)

for (let i = 0; i < 1024; i ++){
  let sp = new THREE.Mesh(geometry, material);
  sp.position.x = Math.random() * (window.innerWidth - window.innerWidth / 1.5);
  sp.position.y = Math.random() * (window.innerHeight - window.innerHeight / 1.5);
  sp.position.z = camera.position.z  + 500 -  Math.random() * 256;
  selection.add(sp);
  spheres.push(sp.id);
}
scene.add(selection);

camera.position.set(512, 256, 256);
pointLight.position.set(
  camera.position.x,
  camera.position.y,
  camera.position.z - 10
)

const renderpass = new RenderPass(scene, camera);
const effectComposer = new EffectComposer(renderer);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth , window.innerHeight ),
  1.6,
  200,
  200
)

const lumShader = new ShaderPass(LuminosityShader);

effectComposer.addPass(renderpass);
effectComposer.addPass(lumShader);
effectComposer.addPass(bloomPass);




const clock = new THREE.Clock();
let delta;
let vel = 30
export function animate() {
	requestAnimationFrame( animate );
  delta = clock.getDelta();
  if (vel < 300)
    vel += 25 * delta;
  camera.position.z -= vel * delta;
  spheres.forEach((id) => {
    let sp = scene.getObjectById(id);
    if (sp){
      if (camera.position.z < sp.position.z) {
        sp.position.x = Math.random() * (window.innerWidth - window.innerWidth / 2);
        sp.position.y = Math.random() * (window.innerHeight - window.innerHeight / 2);
        sp.position.z = camera.position.z - 200 -  Math.random() * 256;

      }
    }
  })

  effectComposer.render();
}


window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
type RendererSetup = () => void
export const setup: RendererSetup = () => {

  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.domElement.className = "fixed -z-10 top-0 left-0";
  document.body.appendChild( renderer.domElement );


}
