<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Valiant
            <div id="subHeader">
               Branding / Logo & Web Design / Dev
            </div>
         </div>
         <div id="textContainerBody" style="padding-bottom: 100px;">
            Valiant is a custom furniture design business that compounds the functionality and aesthetics of both metal and carpentry.
            The client requested a brand identity, logo design, and multimedia channels to convey his business.
         </div>
         <div id="textContainerBody">
            The final logo:
         </div>
         <img src="../../assets/valiant/Artboard 2.png" alt="" id="img1300">
         <div id="textContainerBody">
            Here's what the work of my design process looked like.
            An I-beam was used as the main inspiration for creating the logo. I also wanted to encapsulate the word 'Valiant'
            inside a shape to provide it more structure. The typeface design was created to connote the reliability of engineering
            in traditional companies. 
         </div>
         <img src="../../assets/valiant/lin_ValiantLogo2.png" alt="" id="img1300">
         <div id="textContainerBody">
            Here is the final version of the website. Maintaining aesthetic by heavily promoting the bright reds and subtle off white,
            the philosophy was to create a simple but effective landing page. Modal images, smooth scrolling, and dynamic changing for 
            different resolutions were all incorporated to provide the viewer with a greater time.
         </div>
         <video id="img1300" autoplay loop :src="landing"></video>
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
         // valiantOpen:
         landing: require("../../assets/valiant/valiant.webm") 
      }
   }
}
</script>

<style>

</style>