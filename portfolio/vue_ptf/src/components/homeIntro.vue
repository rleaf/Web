<template>
   <div id="landingintro">
      <span class="introword">Hi </span>
      <span class="introword">I'm </span>
      <span class="introword">Ryan. </span>
      <span class="introword">I </span>
      <span class="introword">like </span>
      <span class="introword">to </span>
      <span class="introword">design </span>
      <span class="introword">and </span>
      <span class="introword">code. </span>
   </div>
</template>

<script>
import { gsap } from "gsap";


export default {
   
   mounted() {
      // window.onload = function () {
      
         setTimeout(function() {
            document.getElementsByClassName("introword").forEach(e => e.style.opacity = "1")  
            }, 500);
      
         const x = document.getElementsByClassName("introword");
         // console.log(x);
         
         function randomInt(max) {
            return Math.floor(Math.random() * Math.floor(max) + 2);
         }
      
         for (let i = 0; i < x.length; i++) {
            // const y = Math.random();
            gsap.to(x[i], {duration: randomInt(5), y: -50});
         }
      
         // gsap.to(".introword", {duration: 3, y: -50});
      // }  
   
   }
}




   


</script>

<style scoped>


#landingintro {
   color: var(--white);
   font-size: 30px;
   padding-bottom: 0px;
   /* width: 100vw; */
   height: 100px;
   text-align: center;
   bottom: 0;
   line-height: normal;
}

.introword {
   /* text-align: center; */
   padding: 0 3px;
   display: inline-block;
   transition: opacity 4s ease-in-out;
   opacity: 0;
   /* transform: translate3d(0, 0, 0); */
   /* transform: matrix(1 ,0 ,0 ,1 ,0 ,0); */
   white-space: nowrap;
   visibility: inherit;
}

</style>