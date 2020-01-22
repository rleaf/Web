<template>
   <div id="portfolioSkeletonFlex">
      <portfolioPreview />
      <expanse />

   </div>
</template>

<script>
import portfolioPreview from './portfolioPreview/portfolioPreview.vue'
import expanse from './portfolioPreview/expansePreview.vue'


export default {
   components: {
      portfolioPreview,
      expanse,

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