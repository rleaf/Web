<template>
   <div id="landing">
      <NavBar/>
      <div id="textContainerHeader">
      </div>
         <div id="curriculumStructure">
            <div id="curriculumBody">
               <div id="curriculumHeader">
                  <u style="font-size: 18px;">What's this?</u>
               </div>
                  <p>
                     Everything and anything completed or not,
                     that I feel does not warrant it's own page but is worth a mention 
                     will be put here.
                  </p>
            </div>
         </div>

   </div>
</template>

<script>
import NavBar from '../components/nav.vue'

export default {
   components: {
      NavBar,
   }
}
</script>

<style scoped>

</style>