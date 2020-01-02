 window.onload = () => {

   let scene = new THREE.Scene();
   let camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
   let renderer = new THREE.WebGLRenderer({antialias: false});

   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   // material
   let material = new THREE.MeshBasicMaterial({color: '#ffffff'});
   let sunMaterial = new THREE.PointsMaterial({color: '#d3c124', size: 0.015});
   let particleMaterial = new THREE.PointsMaterial({color: '#ffffff',size: 0.01});
   let testParticleMaterial = new THREE.PointsMaterial({color: 'red',size: 0.01});
   
   // geometry
   let circleGeometry = new THREE.CircleGeometry(3.2, 100);
   let sphere = new THREE.SphereBufferGeometry(0.5, 25, 25);
   let r = new THREE.TorusBufferGeometry(1.5, .18, 2, 150);
   let rr = new THREE.TorusBufferGeometry(2.25, .19, 2, 200);
   let rrr = new THREE.TorusBufferGeometry(3, .21, 2, 100);
   let rrrr = new THREE.TorusBufferGeometry(6, 1.5, 2, 100);
   
   // sphere.rotateX(0.41);
   // r.rotateX(1.9808);
   // rr.rotateX(1.9808);
   // rrr.rotateX(1.9808);
   // rrrr.rotateX(1.9808);

   
   
   let circle = new THREE.Line(circleGeometry, new THREE.LineDashedMaterial({color: '#ffffff'}));

   // lines 
   let sphereParticle = new THREE.Points(sphere, sunMaterial);
   let rParticle = new THREE.Points(r, particleMaterial);
   let rrParticle = new THREE.Points(rr, particleMaterial);
   let rrrParticle = new THREE.Points(rrr, particleMaterial);
   let rrrrParticle = new THREE.Points(rrrr, particleMaterial);

   let axis = new THREE.Vector3(0, 1, 0).normalize();

   let rings = new THREE.Group();
   rings.add(rParticle);
   rings.add(rrParticle);
   rings.add(rrrParticle);
   rings.add(rrrrParticle);

   sphereParticle.rotateX(0.41);
   rings.rotateX(1.9808);

   scene.add(sphereParticle);
   scene.add(rings);

   camera.position.z = 6;

   function animate() {


      rings.rotateOnAxis(axis, 0.002);
      // rings.rotateOnWorldAxis(axis, 0.002);
       sphereParticle.rotateOnAxis(axis, 0.002);
       sphereParticle.rotateOnWorldAxis(axis, 0.002);


      requestAnimationFrame(animate);
      renderer.render(scene, camera);
   };

   animate();
 };