<template>
   <div id="imgcontainer">
      <a href="">
         <div class="imagehover">
            <p @mouseover="mouseOver">The quick brown fox</p>
         </div>
         <img src="../assets/test.jpg" class="portimg">
      </a>
   </div>
</template>

<script>
export default {
   methods: {
      mouseOver: function() {
         console.log('taods');
      }
   }

}

</script>

<style>

</style>