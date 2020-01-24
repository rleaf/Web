<template>
   <div class="nav">
      <ul id='bar'>
         <router-link to="/" class="underline">
            <li>Home</li>
         </router-link>
         <router-link to="cv" class="underline">
            <li>About / Curriculum Vitae</li>
         </router-link>
         <!-- <a href="#" class="underline"><li>Contact</li></a> -->
         <router-link to='contact' class="underline">
            <li>Contact</li>
         </router-link>
         <router-link to='sketches' class="underline">
            <li>Sketches +</li>
         </router-link>
      </ul>
      <ul id='bar2'>
         <a href="https://www.behance.net/ryli" class="underline" target="_blank">
            <li>Behance</li>
         </a>
         <a href="https://www.instagram.com/ryli.d/" class="underline" target="_blank">
            <li>Instagram</li>
         </a>
         <li style="padding-left: 40px">Owl#4626</li>
         <!-- Get rid of instagram? Not necessary?  -->
      </ul>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>