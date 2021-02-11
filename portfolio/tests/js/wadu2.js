window.onload = () => {

   const scene = new THREE.Scene();
   const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
   const renderer = new THREE.WebGLRenderer({antialias: false});
   
   // camera.position.set(0, 0, 6);
   camera.position.z = 6;
   // camera.translateY(-6);
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.getElementById('container').appendChild(renderer.domElement);

   // Geometry
   const ringGeometry = [];
   let circleRad = 1.5;

   for (let i = 0; i < 8; i++) {
      ringGeometry[i] = new THREE.CircleGeometry(circleRad, 100);
      circleRad = circleRad + 1.3;
   }

   const sunGeometry = new THREE.SphereBufferGeometry(0.8, 25, 25);
   const earthGeometry = new THREE.SphereBufferGeometry(0.06, 15, 15);

   // Material
   const ringMaterial = new THREE.PointsMaterial({color: '#ffffff',size: 0.01});
   const sunMaterial = new THREE.PointsMaterial({color: '#d3c124', size: 0.015});
   const earthMaterial = new THREE.PointsMaterial({color: '#3750e0', size: 0.003});

   // Structures & Groups
   const mainGroup = new THREE.Group();
   
   const sunPoints = new THREE.Points(sunGeometry, sunMaterial);

   const earthGroup = new THREE.Group();
   const earthPoints = new THREE.Points(earthGeometry, earthMaterial);
   earthGroup.add(earthPoints);
   earthPoints.position.set(4.1, 0, 0);

   const ringPoints = [];
   for (let i = 0; i < ringGeometry.length; i++) {
      ringPoints[i] = new THREE.Points(ringGeometry[i], ringMaterial);
      ringPoints[i].rotateX(1.9808);
      // scene.add(ringPoints[i]);
      ringPoints[i].rotateX(-0.41);
      mainGroup.add(ringPoints[i]);
      
   }


   mainGroup.add(sunPoints, earthGroup);
   mainGroup.rotateX(0.41);

   scene.add(mainGroup);

   function animate() {
      const speed = 0.0005;
      const earthRotation = 0.008;
      const yAxis = new THREE.Vector3(0, 1, 0).normalize();
      // const zAxis = new THREE.Vector3(0, 0, 1).normalize();

      // for (let i = 0; i < ringGeometry.length; i++) {
      //    ringPoints[i].rotateOnAxis(zAxis, speed);
      // }

      mainGroup.rotateOnWorldAxis(yAxis, speed);

      earthGroup.rotateOnAxis(yAxis, 0.0009);
      earthPoints.rotateOnAxis(yAxis, earthRotation);

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
   }

   animate();

};