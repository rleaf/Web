<template>
   <div id="portfolioSkeletonFlex">
      <valiant />
      <spotify />
      <expanse />
      <barnegatLight />
      <tubeWorld />
      <dropbox />
   </div>
</template>

<script>
import expanse from './portfolioPreview/expansePreview.vue'
import tubeWorld from './portfolioPreview/tubePreview.vue'
import barnegatLight from './portfolioPreview/barnegatPreview.vue'
import dropbox from './portfolioPreview/dropboxPreview.vue'
import valiant from './portfolioPreview/valiantPreview.vue'
import spotify from './portfolioPreview/spotifyPreview.vue'


export default {
   components: {
      expanse,
      tubeWorld,
      barnegatLight,
      dropbox,
      valiant,
      spotify

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