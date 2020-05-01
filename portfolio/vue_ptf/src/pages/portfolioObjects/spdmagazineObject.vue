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
         <img src="../../assets/spdmagazine/mock11.jpg" alt="" id="img1300">
         <img src="../../assets/spdmagazine/mock12.jpg" alt="" id="img1300">
         <img src="../../assets/spdmagazine/mock21.jpg" alt="" id="img1300">
         <img src="../../assets/spdmagazine/mock22.jpg" alt="" id="img1300">
         <toTop />
      </div>
  </div>
</template>

<script>
import NavBar from '../../components/nav.vue'
import toTop from '../../components/toTop.vue'

export default {
   name: 'portfolioObject',
   components: {
      NavBar,
      toTop
   }
}
</script>

<style>

</style>