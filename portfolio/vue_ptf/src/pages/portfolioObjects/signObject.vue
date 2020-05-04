<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            ASL Illustrations
            <div id="subHeader">
               Illustration
            </div>         
         </div>
         <div id="textContainerBody">
             I was asked to make 50 illustrations of various signs. The book they're to be published in
             incorporates using efficient hand gestures with public speaking, so many signs have been redesigned for presentation environment
             to participate conveying the speakers message. 
         </div>
         <img src="../../assets/signlanguage/mock.jpg" alt="" id="img1300">
         <img src="../../assets/signlanguage/mock2.jpg" alt="" id="img1300">
         <div id="textContainerBody">
            
         </div>
         <br>
      </div>
      <toTop />
  </div>
</template>

<script>
import NavBar from '../../components/nav.vue'
import toTop from '../../components/toTop.vue'

export default {
   components: {
      NavBar,
      toTop
   }
}
</script>

<style scoped>



</style>