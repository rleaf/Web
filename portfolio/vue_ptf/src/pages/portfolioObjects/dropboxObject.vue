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
            A redesign intended to convey a simple and cleaner aesthetic
         </div>
         <img src="../../assets/dropbox/mock1.jpg" alt="" id="img1300">
         <!-- <video id="img1300" autoplay loop src="../../assets/dropbox/test.webm"></video> -->
         <video id="img1300" autoplay loop :src="landing"></video>
         <img src="../../assets/dropbox/dropbox_compare.jpg" alt="" id="img1300">
         <video id="img1300" autoplay loop :src="signin"></video>
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