<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Tube World
            <div id="subHeader">
               Photomanipulation
            </div>
         </div>
         <div id="textContainerBody">
            A small project attempting to create a surreal photomanipulation
         </div>
         <img src="../../assets/tube/tubeworld_glass.jpg" alt="" id="img1300">
         <img src="../../assets/tube/tubeworld_noglass.jpg" alt="" id="img1300">
         <div id="textContainerBody">
            <!-- "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur -->
         </div>        
      </div>
  </div>
</template>

<script>
import NavBar from '../../components/nav.vue'

export default {
   components: {
      NavBar
   }
}
</script>

<style>

</style>