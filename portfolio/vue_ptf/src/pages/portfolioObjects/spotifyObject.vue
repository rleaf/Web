<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Spotify iOS Redesign
            <div id="subHeader">
               UI / UX
            </div>
         </div>
         <div id="textContainerBody" style="padding-bottom: 100px;">
            The purpose of this redesign is to maintain the aesthetic already established and compliment it with increased functionality.
            As an avid Spotify user, the lack of some features can be aggravating. Incorporating better organization on the landing page,
            a 'stats' section of your listening activity, and control of generating your own playlist were some of the largest features implemented.
            Various cosmetic changes were also introduced. 
         </div>
         <div id="textContainerBody">
         </div>
         <img src="../../assets/spotify/mock1.jpg" alt="">
         <img src="../../assets/spotify/mock2.jpg" alt="">
         <img src="../../assets/spotify/spotifymap.jpg" alt="" id="img1300">
         <br>
         <img src="../../assets/spotify/mainLanding.png" alt="" id="img350">
         <img src="../../assets/spotify/landing.png" alt="" id="img350">
         <img src="../../assets/spotify/playlist.png" alt="" id="img350">
         <img src="../../assets/spotify/profile.png" alt="" id="img350">
         <img src="../../assets/spotify/song.png" alt="" id="img350">
         <img src="../../assets/spotify/stats.png" alt="" id="img350">
         <img src="../../assets/spotify/statsGenre.png" alt="" id="img350">
         <img src="../../assets/spotify/search.png" alt="" id="img350">
         <img src="../../assets/spotify/generate.png" alt="" id="img350">
         <img src="../../assets/spotify/carView.png" alt="" id="img350">
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
   },
   data: function() {
      return {
         valiantOpen: ''
      }
   }
}
</script>

<style>

</style>z