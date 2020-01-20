<template>
   <div id="portfolioPreview">
      <div id="imgcontainer">
         <a href="">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <p2>01/04/20</p2>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </a>
      </div>
      <div id="imgcontainer">
         <a href="">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <p2>01/04/20</p2>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </a>
      </div>
      <div id="imgcontainer">
         <a href="">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <p2>01/04/20</p2>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </a>
      </div>
      <div id="imgcontainer">
         <a href="">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <p2>01/04/20</p2>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </a>
      </div>
      <div id="imgcontainer">
         <a href="">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <p2>01/04/20</p2>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </a>
      </div>
      <div id="imgcontainer">
         <a href="">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <p2>01/04/20</p2>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </a>
      </div>
      <div id="imgcontainer">
         <a href="">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <p2>01/04/20</p2>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </a>
      </div>
      <div id="imgcontainer">
         <a href="">
            <div @mouseover="cLog" class="imagehover">
               <p>The quick brown fox</p>
               <br>
               <p2>01/04/20</p2>
            </div>
            <img src="../assets/test.jpg" class="portimg">
         </a>
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