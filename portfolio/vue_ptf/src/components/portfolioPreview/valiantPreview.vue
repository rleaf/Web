<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/valiant">
         <div @mouseover="cLog" class="imagehover">
            <p>Valiant</p>
            <div id="subtext">
               <p>Web Design / Dev</p>
            </div>
            <div id="covertext">
               <p>01/04/20</p>
            </div>
         </div>
         <img src="../../assets/test.jpg" class="portimg">
      </router-link>
   </div>
</template>

<script>
export default {
   methods: {
      cLog: function() {
         console.log('toads');
         
      }
   }
}
</script>

<style>

</style>