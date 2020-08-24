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
            <img src="../assets/sketches/eye.jpg" alt="" id="imgH400">
            <img src="../assets/sketches/gold.jpg" alt="" id="imgH400">
            <img src="../assets/sketches/tube.jpg" alt="" id="imgH400">
            <video autoplay loop :src="threejs" alt=""></video>
            <img src="../assets/sketches/shark1.jpg" alt="" id="imgH400">
            <img src="../assets/sketches/shark2.jpg" alt="" id="imgH400">
            <!-- <img src="../assets/tube/tubeworld_glass.jpg" alt="" id="img350"> -->
         </div>
         <toTop />
   </div>
</template>

<script>
import NavBar from '../components/nav.vue'
import toTop from '../components/toTop.vue'

export default {
   components: {
      NavBar,
      toTop,
   },

   data: () => {
      return {
         threejs: require("../assets/sketches/threejs.webm")
      }
   }
}
</script>

<style scoped>

#sketchesSkeletonFlex {
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start !important;
   padding-bottom: 100px;
}

#sketchesSkeletonFlex > img {
   padding: 10px;
}

</style>