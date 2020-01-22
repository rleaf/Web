<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/expanse">
         <div @mouseover="cLog" class="imagehover">
            <p>expanse</p>
            <br>
            <div id="covertext">
               <p>01/04/20</p>
            </div>
         </div>
         <img src="../../assets/expanse_cover.png" class="portimg">
      </router-link>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>