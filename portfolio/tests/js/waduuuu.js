{/* <template>
   <keep-alive>
      <div id="planets">
         
      </div>
   </keep-alive>
</template>

<script>

import * as THREE from "three";

export default {
   
   mounted() {

         let scene = new THREE.Scene();
         let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
         let renderer = new THREE.WebGLRenderer({antialias: false});
         
         let ringGeometry = [];
         let circleRad = 1.5;
         let main = new THREE.Group();
         let yAxis = new THREE.Vector3(0, 1, 0).normalize();

         // const sunBase = new THREE.Object3D();
         // const earthBase = new THREE.Object3D();

         renderer.setSize(window.innerWidth, window.innerHeight);
         document.getElementById('planets').appendChild(renderer.domElement);
         
         // geometry & control ring counts
         for (let i = 0; i < 8; i++) {
            ringGeometry[i] = new THREE.CircleGeometry(circleRad, 100);
            circleRad = circleRad + 1.3;
         }

         // ringGeometry[d].CircleGeometry(8, 100);
         let sunGeometry = new THREE.SphereBufferGeometry(0.8, 25, 25);
         let earthGeometry = new THREE.SphereBufferGeometry(0.06, 15, 15);
         
         // material
         let sunMaterial = new THREE.PointsMaterial({color: '#d3c124', size: 0.015});
         let earthMaterial = new THREE.PointsMaterial({color: '#2d37c2', size: 0.003});
         let ringMaterial = new THREE.PointsMaterial({color: '#ffffff',size: 0.01});

         // structures -- composed of (geometry, material); 
         let sunPoints = new THREE.Points(sunGeometry, sunMaterial);

         const earthGroup = new THREE.Group();
         let earthPoints = new THREE.Points(earthGeometry, earthMaterial);
         earthPoints.position.set(4.1, 0, 0);

         earthGroup.add(earthPoints);
         let ringParticle = [];

         for (let i = 0; i < ringGeometry.length; i++) {
            ringParticle[i] = new THREE.Points(ringGeometry[i], ringMaterial);
            ringParticle[i].rotateX(1.9808);
            scene.add(ringParticle[i]);
         }

         // sunBase.add(sun);
         // sunBase.add(earthBase);
         // earthBase.add(earth);

         main.add(sunPoints);
         // main.add(earthPoints);
         // main.add(earthGroup);
         main.rotateX(0.41);
         earthGroup.rotateX(0.41);
         // console.table(sunBase);
         
         scene.add(main);
         scene.add(earthGroup);

         camera.position.z = 6;

         function animate() {

            const speed = 0.0005;
            const earthRotation = 0.008;

            for (let i = 0; i < ringGeometry.length; i++) {
               ringParticle[i].rotateOnWorldAxis(yAxis, speed);
            }

            main.rotateOnWorldAxis(yAxis, speed);
            earthPoints.rotateOnAxis(yAxis, earthRotation);
            earthGroup.rotateOnAxis(yAxis, 0.005);

            // sunBase.rotation.y = 0.02;



            requestAnimationFrame(animate);
            renderer.render(scene, camera);
         }

         animate();
      
 
 


   }
}
</script>

<style>

   #planets {
      position: fixed;
      z-index: 0;
   }

</style> */}