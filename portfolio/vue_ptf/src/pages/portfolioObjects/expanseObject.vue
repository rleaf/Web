<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Expanse
            <div id="subHeader">
               typeface
            </div>         
         </div>
         <div id="textContainerBody">
            Expanse is a header typeface designed with tech and sci-fi aesthetics. 
         </div>
         <img src="../../assets/expanse/expanseland.jpg" alt="" id="img1300">
         <img src="../../assets/expanse/expanse_sample.png" alt="" id="img1300">
         <div id="textContainerBody">
            
         </div>
         <img src="../../assets/expanse/expanse_fill.png" alt="" id="img500">
         <img src="../../assets/expanse/expanse_stroke.png" alt="" id="img500">
         <img src="../../assets/expanse/space.jpg" alt="" id="img1300">
         <img src="../../assets/expanse/mock1.jpg" alt="" id="img1300">
         <br>
         <div id="textContainerBody">
            <div id="linkhover">
               Sources: <a href="https://www.artstation.com/karlpoyzer"> Karl Poyzer</a> &
               <a href="https://www.instagram.com/cosmic_background/">Andrew McCarthy</a>
            </div>
         </div>        
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