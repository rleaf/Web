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
export default {

}

// if (document.readyState === 'loading') {
//    document.addEventListener('DOMContentLoaded', introlanding);
// } else {
//    introlanding();
// }

// window.onload = function () {
//    document.getElementsByClassName('introword').forEach(e => e.style.visibility = "hidden");
// }

// function introlanding() {
//    document.getElementById('introword').style.visiblity = "hidden";
//    // x.style.visibility="hidden";
//    // x
// }

// introlanding();
// window.onload = introlanding();

window.onload = function () {
   setTimeout(function() {
      document.getElementsByClassName("introword").forEach(e => e.style.opacity = "1")  
      }, 500);
   }


</script>

<style scoped>


#landingintro {
   color: var(--white);
   font-size: 30px;
   padding-bottom: 100px;
   /* width: 100vw; */
   height: 100px;
   text-align: center;
   bottom: 0;
   line-height: normal;
}

.introword {
   display: inline-block;
   /* text-align: center; */
   transition: opacity 0.5s ease-in-out;
   opacity: 0;
   /* padding: 0 3px; */
   transform: matrix(0, 0, 0, 0, 1, 1);
}

</style>