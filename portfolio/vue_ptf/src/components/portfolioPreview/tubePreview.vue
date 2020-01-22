<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/tube">
         <div @mouseover="cLog" class="imagehover">
            <p>tube world</p>
            <br>
            <div id="covertext">
               <p>01/04/20</p>
            </div>
         </div>
         <img src="../../assets/tubeworld_cover.jpg" class="portimg">
      </router-link>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>