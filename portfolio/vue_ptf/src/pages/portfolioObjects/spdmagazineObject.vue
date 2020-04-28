<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Magazine Spread
            <div id="subHeader">
               Design / Illustration / Print
            </div>
         </div>
         <div id="textContainerBody">
            This project was my entry to SPD's student design competition. It consists of a four page spread. I decided to go with a spread layout that had a science fiction and computer-esque aesthetic.
            "What is Artificial Intelligence?" was the headline and I focused on illustrating "bundles" of threads together to resemble the connectionism that occurs in neural networks.
         </div>
         <img src="../../assets/spdmagazine/spread1.png" alt="" id="img1300">
         <div id="textContainerBody">
            
         </div>
         <img src="../../assets/spdmagazine/spread2.png" alt="" id="img1300">
      </div>
  </div>
</template>

<script>
import NavBar from '../../components/nav.vue'

export default {
   name: 'portfolioObject',
   components: {
      NavBar
   }
}
</script>

<style>

</style>