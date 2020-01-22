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
         <img src="../../assets/dropbox/dropbox.jpg" alt="" id="img1300">
            <!-- <video id="img1300" autoplay loop src="../../assets/dropbox/test.webm"></video> -->
            <video id="img1300" autoplay loop :src="landing"></video>
            <video id="img1300" autoplay loop :src="signin"></video>
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
         landing: require("../../assets/dropbox/test.webm"),
         signin: require("../../assets/dropbox/signin.webm")
      }
   },
}
</script>

<style>

</style>