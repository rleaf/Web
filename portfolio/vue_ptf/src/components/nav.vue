<template>
   <div class="nav">
      <!-- <div class="imageheaderratio"> -->
            <!-- <li>Home</li> -->
         <router-link to="/" class="underline">
            <img src="../assets/logo.png" width="50px" alt="">
         </router-link>
         <ul id='bar'>
            <!-- <router-link to="/" class="underline">
               <li>Home</li>
            </router-link> -->
            <router-link to="design" class="underline">
               <li>Design</li>
            </router-link>
            <router-link to="cv" class="underline">
               <li>About / CV</li>
            </router-link>
            <router-link to='' class="underline">
               <span @click="emailnotif">
                  <li>Contact</li>
                  <input value="rlin.leaf@gmail.com" class="email" style="opacity: 0; visibility: 0; z-index: -999; position: absolute;">
                  <span class="emailnotif" style="position: absolute; overflow-wrap: normal;">Copied to clipboard!</span>
               </span>
            </router-link>
            <router-link to='sketches' class="underline">
               <li>Sketches +</li>
            </router-link>
         </ul>
         <ul id='bar2'>
            <a href="https://www.behance.net/ryli" class="underline" target="_blank">
               <li>Behance</li>
            </a>
            <a href="https://www.github.com/rleaf" class="underline" target="_blank">
               <li>Github</li>
            </a>
            <!-- <li style="padding-left: 40px">Owl#4626</li> -->
         </ul>
      <!-- </div> -->
   </div>
</template>

<script>
import { gsap } from "gsap";

export default {

   methods: {

      emailnotif() {

         const x = document.getElementsByClassName("emailnotif")[0];
         const y = document.getElementsByClassName("email")[0];

         gsap.to(x, {duration: 2, opacity: 1, x: 50, onComplete: tweenFin});
         
         function tweenFin() {
            gsap.to(x, {duration: 1, opacity: 0, onComplete: tweenReset});
         }

         function tweenReset() {
            gsap.to(x, {duration: 0, x: -50});
         }

         y.select();
         y.setSelectionRange(0, 99999);
         
         document.execCommand("copy");
         
      }
   }   
}


</script>

<style>

.emailnotif {
   font-family: 'Inconsolata', sans-serif;
   font-size: 14px;
   color: var(--offWhite);
   margin-top: 70px;
   margin-left: -80px;
   width: 200px !important;
   /* transition: opacity 1s ease-in-out; */
   opacity: 0;
}

</style>