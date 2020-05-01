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
      
         const x = document.getElementsByClassName("introword");
      
         for (let i = 0; i < x.length; i++) {
            gsap.from(x[i], {duration: "random(3, 5)", y: 100});
            gsap.from(x[i], {duration: 5, opacity: 0, stagger: 3.5});
         }
      
   }
}
</script>

<style scoped>


#landingintro {
   color: var(--white);
   font-size: 30px;
   padding-bottom: 0px;
   height: 100px;
   text-align: center;
   bottom: 0;
   line-height: normal;
   margin-bottom: 50px;
}

.introword {
   display: inline-block;
   white-space: nowrap;
   visibility: inherit;
   padding: 0 3px;
}

</style>