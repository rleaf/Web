<template>
   <div id="landingintro">
      <span class="introword">Hi </span>
      <span class="introword">I'm </span>
      <span class="introword">Ryan.</span>
      <span class="introword">I </span>
      <span class="introword">like </span>
      <span class="introword">to </span>
      <span class="introword">solve </span>
      <span class="introword">problems. </span>
         <!-- <span class="introword" style="padding: 0 0 0 3px;">p</span>
         <span class="introword" style="padding: 0;">r</span>
         <span class="introword" style="padding: 0;">o</span>
         <span class="introword" style="padding: 0;">b</span>
         <span class="introword" style="padding: 0;">l</span>
         <span class="introword" style="padding: 0;">e</span>
         <span class="introword" style="padding: 0;">m</span>  
         <span class="introword" style="padding: 0;">s</span>
         <span class="introword" style="padding: 0;">.</span> -->
      <!-- <span class="introword">and </span>
      <span class="introword">learn. </span> -->
   </div>
</template>

<script>
import { gsap } from "gsap";

export default {
   
   mounted() {
      
         const x = document.getElementsByClassName("introword");
      
         for (let i = 0; i < x.length; i++) {
            gsap.from(x[i], {duration: "random(3, 5)", y: 120});
            gsap.from(x[i], {duration: "random(4, 8)", opacity: 0, stagger: 6, ease: "slow"});
         }
      
   }
}
</script>

<style scoped>


#landingintro {
   color: var(--white);
   font-size: 46px;
   padding-bottom: 0px;
   height: 100px;
   text-align: center;
   line-height: normal;
   margin-top: 18vh;
}

@media screen and (max-height: 850px) {
   #landingintro {
      margin-top: 10vh;
   }
}

.introword {
   display: inline-block;
   white-space: nowrap;
   visibility: inherit;
   padding: 0 4px;
}

</style>