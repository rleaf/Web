<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Barnegat Light
            <div id="subHeader">
               Photography
            </div>
         </div>
         <div id="textContainerBody">
            I spent the weekend at Barnegat Light.
         </div>
         <img src="../../assets/barnegat/beach.jpg" alt="" id="img1300">
         <img src="../../assets/barnegat/bird.jpg" alt="" id="img1300">
         <img src="../../assets/barnegat/trails.jpg" alt="" id="img1300">
         <img src="../../assets/barnegat/seagullfront.jpg" alt="">
         <img src="../../assets/barnegat/seagullside.jpg" alt="">
         <img src="../../assets/barnegat/panorama.jpg" alt="" id="img1600">
         <img src="../../assets/barnegat/mock1.jpg" alt="" id="img800">
         <img src="../../assets/barnegat/mock2.jpg" alt="" id="img800">
         <div id="textContainerBody">
         </div>        
      </div>
      <toTop />
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