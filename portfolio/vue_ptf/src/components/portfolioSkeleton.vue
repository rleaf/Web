<template>
   <div id="portfolioSkeletonFlex">
      <expanse />
      <tubeWorld />
      <barnegatLight />
      <dropbox />
   </div>
</template>

<script>
import expanse from './portfolioPreview/expansePreview.vue'
import tubeWorld from './portfolioPreview/tubePreview.vue'
import barnegatLight from './portfolioPreview/barnegatPreview.vue'
import dropbox from './portfolioPreview/dropboxPreview.vue'


export default {
   components: {
      expanse,
      tubeWorld,
      barnegatLight,
      dropbox

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