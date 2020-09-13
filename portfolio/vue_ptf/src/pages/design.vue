<template>
  <div id="landing">
     <NavBar />
     <div id="portfolio">
        <portfolioSkeleton />
     </div>
  </div>
</template>

<script>
import NavBar from '../components/nav.vue'
import portfolioSkeleton from '../components/portfolioSkeleton.vue'

export default {
   name: 'design',
   components: {
      NavBar,
      portfolioSkeleton
   }
}

</script>

<style scoped>

</style>