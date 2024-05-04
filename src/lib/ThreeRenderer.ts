import * as THREE from 'three';
import { EffectComposer, RenderPass, UnrealBloomPass } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const geometry = new THREE.SphereGeometry(  );
const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const ambientLight = new THREE.AmbientLight(0x444444);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight( 0xdfdfb5, 1.7 );
scene.add( directionalLight );
directionalLight.position.set(0.7, 0, 0.5);
const spotLight = new THREE.SpotLight(0xffffff);
spotLight.intensity = 1.0
spotLight.power = 200.0

const spheres: number[] = [];
for (let i = 0; i < 1024; i ++){
  let sp = new THREE.Mesh(geometry, material);
  sp.position.x = Math.random() * (window.innerWidth - window.innerWidth / 2);
  sp.position.y = Math.random() * (window.innerHeight - window.innerHeight / 2);
  sp.position.z = camera.position.z -100 -  Math.random() * 256;
  scene.add(sp);
  spheres.push(sp.id);
}

camera.position.set(512, 256, 256);
spotLight.position.set(512, 256, 256);
spotLight.target.position.set(512, 256, 270)
spotLight.angle = 80 * Math.PI / 180;
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLight);
scene.add(spotLightHelper)

const renderpass = new RenderPass(scene, camera);
const effectComposer = new EffectComposer(renderer);

const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth /3, window.innerHeight /3),
  1.6,
  200,
  200
)

effectComposer.addPass(renderpass);
effectComposer.addPass(bloomPass);




const clock = new THREE.Clock();
let delta;
export function animate() {
	requestAnimationFrame( animate );
  delta = clock.getDelta();
  camera.position.z -= 30 * delta;
  spotLight.position.z = camera.position.z + 30;
  spheres.forEach((id) => {
    let sp = scene.getObjectById(id);
    if (sp){
      if (camera.position.z < sp.position.z) {
        sp.position.x = Math.random() * (window.innerWidth - window.innerWidth / 2);
        sp.position.y = Math.random() * (window.innerHeight - window.innerHeight / 2);
        sp.position.z = camera.position.z -  Math.random() * 256;

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
