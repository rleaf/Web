 window.onload = () => {

   let scene = new THREE.Scene();
   let camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
   let renderer = new THREE.WebGLRenderer({antialias: false});
   let ringGeometry = [];
   let circleRad = 1.5;

   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   
   // geometry
   for (let i = 0; i < 7; i++) {
      ringGeometry[i] = new THREE.CircleGeometry(circleRad, 100);
      circleRad = circleRad + 0.5;
   };

   let sphere = new THREE.SphereBufferGeometry(0.5, 25, 25);
   ringGeometry[0].vertices.shift();
   
   // material
   let sunMaterial = new THREE.PointsMaterial({color: '#d3c124', size: 0.015});
   let particleMaterial = new THREE.PointsMaterial({color: '#ffffff',size: 0.01});
   

   // structures -- composed of (geometry, material); 
   let sphereParticle = new THREE.Points(sphere, sunMaterial);
   let ringStructure = [];

   for (let i = 0; i < ringGeometry.length; i++) {
      ringStructure[i] = new THREE.Points(ringGeometry[i], particleMaterial);
      ringStructure[i].rotateX(1.9808);
      scene.add(ringStructure[i]);
   }

   let xAxis = new THREE.Vector3(1, 0, 0).normalize();
   let yAxis = new THREE.Vector3(0, 1, 0).normalize();
   let zAxis = new THREE.Vector3(0, 0, 1).normalize();


   sphereParticle.rotateX(0.41);

   scene.add(sphereParticle);
   camera.position.z = 6;

   function animate() {

      for (let i = 0; i < ringGeometry.length; i++) {
         ringStructure[i].rotateOnWorldAxis(yAxis, 0.002);
      }
      sphereParticle.rotateOnAxis(yAxis, 0.008);
      sphereParticle.rotateOnWorldAxis(yAxis, 0.002);


      requestAnimationFrame(animate);
      renderer.render(scene, camera);
   };

   animate();
 };