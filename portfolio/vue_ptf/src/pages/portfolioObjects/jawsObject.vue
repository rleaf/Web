a<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Jaws Movie Poster
            <div id="subHeader">
               Illustration
            </div>
         </div>
         <div id="textContainerBody">
            My goal for this poster design was to step out of my comfort zone and to continue practicing my illustration skills.
            I want to present a "freehand" and "liberal" aesthetic in this poster illustration by creating unusual and organic shapes as opposed to
            standard geometric shapes such as squares.
         </div>
         <img src="../../assets/jawsposter/mock1.jpg" alt="">
         <br>
         <img src="../../assets/jawsposter/mock21.jpg" alt="">
         <!-- <img src="../../assets/jawsposter/mock2.png" alt=""> -->
         <!-- <img src="../../assets/jawsposter/mock3.jpg" alt=""> -->
         <!-- <img src="../../assets/jawsposter/jawsposter.png" alt=""> -->
         <div id="textContainerBody">
            Mockups of merchandise to pair with the redesign of the Jaws movie poster. To compensate for the sharp cutoffs on the right and bottom side of the shark
            I added more graphics that allowed the image to float nicely when placed in the middle of a shirt. The graphics also compliment the motion of the shark. 
            Both illustrations have simplified variations of the shark itself, the light blue cyan highlights have been removed to protect the scaling of the image.
         </div>
         <img src="../../assets/jawsposter/mockup1.jpg" class="portimg">
         <img src="../../assets/jawsposter/mockup2.jpg" class="portimg">
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