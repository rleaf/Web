<template>
   <div id="imgcontainer">
      <router-link id="imgrouter" to="/portfoliotest">
         <div @mouseover="cLog" class="imagehover">
            <p>The quick brown fox</p>
            <br>
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

}
</script>

<style>

</style>