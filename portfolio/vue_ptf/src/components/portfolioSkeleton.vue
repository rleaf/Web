<template>
   <div id="portfolioSkeletonFlex">
      <portfolioPreview />
      <expanse />
      <tubeWorld />

   </div>
</template>

<script>
import portfolioPreview from './portfolioPreview/portfolioPreview.vue'
import expanse from './portfolioPreview/expansePreview.vue'
import tubeWorld from './portfolioPreview/tubePreview.vue'


export default {
   components: {
      portfolioPreview,
      expanse,
      tubeWorld

   },

   methods: {
      cLog: function() {
         console.log('taods');
      }
   }

}

</script>

<style>

#imgcontainer, #portfolioSkeletonFlex {
   display: inherit;
   flex-wrap: inherit;
   justify-content: inherit;
}

</style>