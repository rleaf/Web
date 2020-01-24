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
                     Sketches and other random works for practice
                  </p>
            </div>
         </div>
         <div id="portfolioSkeletonFlex">
            <img src="../assets/sketches/gold.jpg" alt="" id="img350">
            <img src="../assets/sketches/eye.jpg" alt="" id="img350">
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