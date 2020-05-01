<template>
  <div id="toTop">
     <!-- <a href onclick="scroll({0,0, behavior: 'smooth'})">Go back to top</a> -->
     <router-link  to="/">Go back home</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#toTop {
   text-align: center;
}

#toTop > a {

   font-size: 22px;
   font-family: 'Inconsolata', sans-serif;
   color: var(--white);
   text-decoration: none;
   list-style-type: none;
   padding-bottom: 150px;
}

#button {
   display: inline-block;
   background-color: #FF9800;
   width: 50px;
   height: 50px;
   text-align: center;
   border-radius: 4px;
   position: fixed;
   bottom: 30px;
   right: 30px;
   transition: background-color .3s, 
   opacity .5s, visibility .5s;
   opacity: 0;
   visibility: hidden;
   z-index: 1000;
}

</style>