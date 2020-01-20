<template>
   <div id="portfolioPreview">
      <div id="imgcontainer">
         <router-link id="imgrouter" to="/testobject">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <div id="covertext">
                  <p>01/04/20</p>
               </div>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </router-link>
      </div>
   </div>
</template>

<script>
export default {
   methods: {
      cLog: function() {
         console.log('taods');
      }
   }

}

</script>

<style scoped>

#portfolioPreview {
   display: inherit;
   flex-wrap: inherit;
   justify-content: inherit;
}

</style>