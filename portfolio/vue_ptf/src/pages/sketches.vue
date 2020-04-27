<template>
   <div id="landing">
      <NavBar/>
      <div id="textContainerHeader">
      </div>
         <div id="curriculumStructure">
            <div id="curriculumBody">
               <div id="curriculumHeader">
                  <i style="font-size: 18px;">---</i>
               </div>
                  <p>
                     Sketches / Designs / Projects that are not complete. These are generally for practice
                     and learning new things. 
                  </p>
            </div>
         </div>
         <div id="sketchesSkeletonFlex">
            <img src="../assets/sketches/eye.jpg" alt="" id="img350">
            <img src="../assets/sketches/gold.jpg" alt="" id="img350">
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

#sketchesSkeletonFlex {
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start !important;
}

</style>