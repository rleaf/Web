
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100);
// var camera = new THREE.OrthographicCamera(-20, 20, 20, -20, 5, 50);

camera.position.z = 40;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


const base = new THREE.Group();
const planetBase1 = new THREE.Group();
const planetBase2 = new THREE.Group();
const planetBase3 = new THREE.Group();
const planetBase4 = new THREE.Group();

let sphereGeometry = new THREE.SphereGeometry(5, 25, 25);

let circleGeometry1 = new THREE.CircleGeometry(10, 80);
let circleGeometry2 = new THREE.CircleGeometry(15, 80);
let circleGeometry3 = new THREE.CircleGeometry(20, 80);
let circleGeometry4 = new THREE.CircleGeometry(25, 80);

let planetGeometry1 = new THREE.SphereGeometry(.5, 8, 8);
let planetGeometry3 = new THREE.SphereGeometry(.5, 8, 8);
let planetGeometry4 = new THREE.SphereGeometry(.8, 8, 8);


let sunMaterial = new THREE.PointsMaterial({color: '#d3c124', size: 0.085} );
let planetMaterial1 = new THREE.PointsMaterial({color: '#bb5831', size: 0.075} );
let planetMaterial3 = new THREE.PointsMaterial({color: '#0554aa', size: 0.075} );
let planetMaterial4 = new THREE.PointsMaterial({color: '#bb314e', size: 0.075} );
let ringMaterial = new THREE.PointsMaterial({color: '#ffffff', size: 0.04});


let sun = new THREE.Points( sphereGeometry, sunMaterial);

let ring1 = new THREE.Points( circleGeometry1, ringMaterial);
let ring2 = new THREE.Points( circleGeometry2, ringMaterial);
let ring3 = new THREE.Points( circleGeometry3, ringMaterial);
let ring4 = new THREE.Points( circleGeometry4, ringMaterial);

let planet1 = new THREE.Points( planetGeometry1, planetMaterial1);
let planet3 = new THREE.Points( planetGeometry3, planetMaterial3);
let planet4 = new THREE.Points( planetGeometry4, planetMaterial4);


let xAxis = new THREE.Vector3(1, 0, 0).normalize();
let yAxis = new THREE.Vector3(0, 1, 0).normalize();

ring1.rotation.x = Math.PI / 2;
ring2.rotation.x = Math.PI / 2;
ring3.rotation.x = Math.PI / 2;
ring4.rotation.x = Math.PI / 2;

//  Group for objects to rotate about main vector point
base.add(sun, ring1, ring2, ring3, ring4, planet1, planet3, planet4);

base.rotation.x = .4;
planetBase1.rotation.x = .4;
planetBase3.rotation.x = .4;
planetBase4.rotation.x = .4;
// planetBase.rotateOnWorldAxis(xAxis, 0.4);
// base.rotateOnWorldAxis(xAxis, 0.4);

// Group for planets to rotate around themself
planetBase1.add(planet1);
planetBase3.add(planet3);
planetBase4.add(planet4);

scene.add(base);
scene.add(planetBase1);
scene.add(planetBase3);
scene.add(planetBase4);

function onMouseMove(event) {
   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function render() {

   // update the picking ray with the camera and mouse position
   raycaster.setFromCamera(mouse, camera);

   // calculate objects intersecting the picking ray
   var intersects = raycaster.intersectObjects(scene.children);

   for (var i = 0; i < intersects.length; i++) {

      intersects[i].object.material.color.set(0xff0000);
      
   }

   renderer.render(scene, camera);

}

window.addEventListener('mousemove', onMouseMove, false);

window.requestAnimationFrame(render);




function animate() {
   requestAnimationFrame(animate);
   
   planetBase1.position.set(0, 0, 0);
   planetBase2.position.set(0, 0, 0);
   planetBase3.position.set(0, 0, 0);
   planetBase4.position.set(0, 0, 0);
   planetBase1.translateX(10);
   planetBase3.translateX(20);
   planetBase4.translateX(25);
   
   base.rotation.y += 0.0008;

   planetBase1.rotation.y += 0.0035;
   planet1.rotation.y += 0.02;

   planetBase3.rotation.y += 0.0015;
   planet3.rotation.y += 0.006;

   planetBase4.rotation.y += 0.0005;
   planet4.rotation.y += 0.009;
   
   // base.rotateOnWorldAxis(yAxis, 0.0015);
   // planetBase.translateOnAxis(xAxis, 20);
   // planetBase.rotateOnWorldAxis(yAxis, 0.0015);
   


   renderer.render(scene, camera);
}

animate();