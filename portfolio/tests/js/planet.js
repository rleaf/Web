 window.onload = () => {

   let scene = new THREE.Scene();
   let camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
   let renderer = new THREE.WebGLRenderer({antialias: false});
   let ringGeometry = [];
   let circleRad = 1.5;
   let planets = new THREE.Group();
   const windowHalfX = window.innerWidth / 2;
   const windowHalfY = window.innerHeight / 2;
   const sunBase = new THREE.Object3D();
   const earthBase = new THREE.Object3D();


   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   
   // geometry & control ring counts
   for (let i = 0; i < 7; i++) {
      ringGeometry[i] = new THREE.CircleGeometry(circleRad, 100);
      ringGeometry[i].vertices.shift();
      circleRad = circleRad + 0.5;
   };

   let sunGeometry = new THREE.SphereBufferGeometry(0.5, 25, 25);
   let earthGeometry = new THREE.SphereBufferGeometry(0.04, 20, 20);
   
   
   // material
   let sunMaterial = new THREE.PointsMaterial({color: '#d3c124', size: 0.015});
   let earthMaterial = new THREE.PointsMaterial({color: '#161f9b', size: 0.003});
   let particleMaterial = new THREE.PointsMaterial({color: '#ffffff',size: 0.01});
   

   // structures -- composed of (geometry, material); 
   let sun = new THREE.Points(sunGeometry, sunMaterial);
   let earth = new THREE.Points(earthGeometry, earthMaterial);
   let ringParticle = [];

   for (let i = 0; i < ringGeometry.length; i++) {
      ringParticle[i] = new THREE.Points(ringGeometry[i], particleMaterial);
      ringParticle[i].rotateX(1.9808);
      scene.add(ringParticle[i]);
   }

   sunBase.add(sun);
   sunBase.add(earthBase);
   earthBase.add(earth);

   earth.position.set(2.5, 0, 0);

   let xAxis = new THREE.Vector3(1, 0, 0).normalize();
   let yAxis = new THREE.Vector3(0, 1, 0).normalize();
   let zAxis = new THREE.Vector3(0, 0, 1).normalize();


   planets.add(sun);
   planets.add(earth);
   planets.rotateX(0.41);
   console.table(sunBase);
   
   // sun.rotateX(0.41);
   // earth.rotateX(0.41);

   scene.add(planets);
   // scene.add(sun);
   // scene.add(earth);
   camera.position.z = 6;

   function animate() {

      for (let i = 0; i < ringGeometry.length; i++) {
         ringParticle[i].rotateOnWorldAxis(yAxis, 0.002);
      }

      planets.rotateOnWorldAxis(yAxis, 0.002);
      earth.rotateOnAxis(yAxis, 0.008);
      sunBase.rotation.y = 0.02;
      // planets.rotateOnAxis(yAxis, 0.002);
      // sun.rotateOnAxis(yAxis, 0.008);
      // sun.rotateOnWorldAxis(yAxis, 0.002);
      // earth.rotateOnWorldAxis(yAxis, 0.008);
      // earth.rotateOnWorldAxis(yAxis, 0.002);


      requestAnimationFrame(animate);
      renderer.render(scene, camera);
   };

   animate();

   // window.addEventListener('resize', onWindowResize, false);
   
   function onWindowResize() {

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

   }

 };
 
 