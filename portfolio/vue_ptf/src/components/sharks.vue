<template>
   <keep-alive>
      <div id="dinosaur">

      </div>
   </keep-alive>
</template>

<script>

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {

   mounted() {

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(25, 1, 0.1, 2000);
      const renderer = new THREE.WebGLRenderer({antialias: false, alpha: true});
      const loader = new GLTFLoader();
      const url = '../assets/3dmodel/scene.gltf';
      // const url = 'https://threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf';
      const width = window.innerWidth / 3;

      renderer.setSize(600, 600);
      renderer.setSize(width, width);
      document.getElementById('dinosaur').appendChild(renderer.domElement);
      // camera.position.z = 6;
      camera.position.set(0, 0, 5);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      let geometry = new THREE.BoxGeometry();
      let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
      let cube = new THREE.Mesh(geometry, material);

      scene.add(cube);


      loader.load(url, (gltf) => {
         const root = gltf.scene;
         scene.add(root);
         console.log('loaded');
      }, (xhr) => {
         console.log((xhr.loaded/xhr.total * 100) + '% loaded');
      }, (error) => {
         console.log('An error happened: ' + error);
      });

      function animate() {
         

         requestAnimationFrame(animate);
         renderer.render(scene, camera);

         cube.rotation.x += 0.01;
         cube.rotation.y += 0.01;
      }
      animate();
   }

}
</script>

<style>

   /* #dinosaur {
      float: right;
      width: 600px;
      height: 600px;
      padding-right: 5vw;
   } */
   #dinosaur {
      position: absolute;
      right: 100px;
   }

</style>