<template>
  <div id="landing">
     <NavBar/>
      <div id="centerContainer">
         <div id="textContainerHeader">
            Expanse
         </div>
         <div id="textContainerBody">
            Expanse is a header typeface designed with tech and sci-fi aesthetics. 
         </div>
         <!-- <img src="../../assets/Untitled-2.jpg" alt=""> -->
         <img src="../../assets/expanse_sample.png" alt="" id="expanseSample">
         <br>
         <img src="../../assets/expanse_fill.png" alt="" id="expanseFill">
         <img src="../../assets/expanse_stroke.png" alt="" id="expanseFill">
         <div id="textContainerBody">

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

<style scoped>

#expanseSample {
   width: 1300px;
}

@media (max-width: 1420px) {
   #expanseSample {
      width: 80vw;
   }
}

#expanseFill {
   width: 400px;
   padding: 25px 50px;
}

</style>