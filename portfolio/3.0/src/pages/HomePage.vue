<template>
  <div id="landing">
    <div class="nav">
      <ul id='bar'>
        <a href="#" class="underline"><li>Curriculum Vitae</li></a>
        <!-- <a href="#" class="underline"><li>Contact</li></a> -->
        <router-link to='test' class="underline"><li>Contact</li></router-link>
      </ul>
      <ul id='bar2'>
        <a href="#" class="underline"><li>Behance</li></a>
        <a href="https://www.instagram.com/ryli.d/" class="underline"><li>Instagram</li></a>
        <li style="padding-left: 40px">Owl#4626</li>
        <!-- Get rid of instagram? Not necessary?  -->
      </ul> 
    </div>

    <div id="portfolio">
      
      <div id="imgcontainer">
        <a href="">
        <div class="imagehover">
          <p>The quick brown fox</p>
        </div>
          <img src="../assets/test.jpg" class="portimg">
        </a>
      </div>



    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

:root {
   --whiteHover: #6baf76;
   --white: #fff;
   --black: #000000;
}

::-webkit-scrollbar {
   width: 10px;
}

/* ::-webkit-scrollbar-track {
   background: var(--white);
} */

::-webkit-scrollbar-thumb {
   background: var(--whiteHover);
}

::-webkit-scrollbar-thumb:hover {
   background: var(--whiteHover);
}

body, html {
   margin: 0;
   padding: 0;
   background-color: #161616;
}

#landing {
   padding: 0 10vh 0 10vh;
}

.nav {
   padding-top: 100px;
   font-size: 16px;
}

.nav:hover a {
   color: var(--whiteHover);
}



#bar {
   float: left;
   padding: 0;
   /* padding-left: 200px; Add padding to left side of navbar*/
}

#bar2 {
   float: right;
   padding: 0;
   /* padding-right: 200px; ??? Add more social links?? */
}

.barsvg {
   fill: var(--white);
   padding: 0;
   margin: 0;
   position: relative;
}

.nav ul li{
   color: var(--white);
   font-family: 'Inconsolata', sans-serif;
   text-transform: uppercase;
   list-style-type: none;
   text-decoration: none;
   display: inline-block;
}

.nav ul a {
   margin: 0 40px 0 40px;
}

.nav ul li:hover {
   color: var(--whiteHover);
   /* add fade transition */
}

.underline {
   display: inline;
   position: relative;
   overflow: hidden;
}

.underline::after {
   content: '';
   position: absolute;
   z-index: 1;
   right: 0;
   width: 0;
   bottom: -20px;
   background: var(--whiteHover);
   height: 2px;
   transition-property: left right;
   transition-duration: 0.3s;
   transition-timing-function: ease-out;
}

.underline:hover::after, .underline:focus::after, .underline:active::after {
   left: 0;
   right: auto;
   width: 100%;
   color: var(--whiteHover);
}

#portfolio {
   display: flex;
   clear:both;
   padding: 200px 50px 0 50px;
   justify-content: center;
   flex-wrap: wrap;
   /* flex-direction: row; */
}

#imgcontainer {
   width: 300px;
   height: 300px;
   position: relative;
}

#imgcontainer a img{
   width: 100%;
   height: 100%;
   opacity: 1;
}

.imagehover {
   position: absolute;
   display: inline-block;
   width: 300px;
   height: 300px;
   opacity: 0;
}

.imagehover p {
   font-family: 'Inconsolata', sans-serif;
   text-align: center;
   color: var(--white);
}

#imgcontainer:hover .imagehover {
   opacity: 1;
   transition: 0.1s;
}

#imgcontainer:hover a img {
   opacity: 0.1;
   transition: 0.1s;
}
</style>