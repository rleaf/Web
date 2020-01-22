<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Expanse
         </div>
         <div id="textContainerBody">
            Expanse is a header typeface designed with tech and sci-fi aesthetics. 
         </div>
         <!-- <img src="../../assets/Untitled-2.jpg" alt=""> -->
         <img src="../../assets/expanse_fill.png" alt="">
         <br>
         <img src="../../assets/expanse_stroke.png" alt="">
         <div id="textContainerBody">

         </div>        
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