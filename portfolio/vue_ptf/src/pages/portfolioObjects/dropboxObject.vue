<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            DropBox Redesign
            <div id="subHeader">
               Web Design & Development
            </div>
         </div>
         <div id="textContainerBody">
            This was a project in my web design class where we were simply asked to redesign a site.
         </div>
         <div id="testvid">
            <video width="1300px" autoplay loop src="../../assets/dropbox/test.webm"></video>
            <!-- <video width="1300px" autoplay loop controls :src="video"></video> -->
         </div>
         <img src="../../assets/dropbox/dropbox.jpg" alt="" id="img1300">
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
      NavBar,
   },
   data: function() {
      return {
         video: "../../assets/dropbox/test.webm",
      }
   }
}
</script>

<style>

</style>