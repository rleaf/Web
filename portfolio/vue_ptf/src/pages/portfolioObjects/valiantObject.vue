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
            {{valiantOpen}}
            <construction />
         </div>
         <div id="textContainerBody">
         </div>
         <!-- <img src="../../assets/valiant/logo_red.png" alt="">
         <img src="../../assets/valiant/logo_white.png" alt=""> -->
         <div id="textContainerBody">
         </div>        
      </div>
  </div>
</template>

<script>
import NavBar from '../../components/nav.vue'
import construction from '../../components/construction.vue'

export default {
   name: 'portfolioObject',
   components: {
      NavBar,
      construction,
   },
   data: function() {
      return {
         valiantOpen: 'Valiant is a custom furniture design business that compounds the functionality and aesthetics of both metal and word working. The client requested a brand identity, logo design, and multimedia channels to convey his business.'
      }
   }
}
</script>

<style>

</style>