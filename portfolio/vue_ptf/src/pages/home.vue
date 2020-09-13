<template>
<div id="origin">
   <div id="canvas">
      <waduuuu />
   </div>
  <div id="landing">
      <NavBar />
      <div id="portfolio">
         <homeIntro />
         <!-- <portfolioSkeleton /> -->
         <!-- <Grain/> -->
      </div>
      <div id="homefooter">
         <a href="https://youtu.be/wupToqz1e2g" target="_blank">Made by Ryan Lin</a>
      </div>
  </div>
</div>
</template>

<script>
   import NavBar from '../components/nav.vue'
   // import portfolioSkeleton from '../components/portfolioSkeleton.vue'
   import homeIntro from '../components/homeIntro.vue'
   // import Grain from '../components/grain.vue'
   import waduuuu from '../components/waduuuu.vue'

   export default {
      name: 'home',
      components: {
         NavBar,
         // portfolioSkeleton,
         homeIntro,
         waduuuu
         // Grain
      },
   }

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lora&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap');
@import url('https://fonts.googleapis.com/css?family=Amiri&display=swap');


:root {
   /* --green: #6baf76; */
   --green: #ffffff;
   --white: #cacaca;
   --offWhite: #b1b1b1;
   /* --lightGreen: #aa1d1d; */
   /* --black: #000000; */
}

::-webkit-scrollbar {
   display: none;
   /* width: 10px; */
   /* overflow: hidden; */
}

::-webkit-scrollbar-thumb {
   background: var(--green);
}

::-webkit-scrollbar-thumb:hover {
   background: var(--green);
}

::-webkit-scrollbar-track {
   display: none;
}

body, html {
   margin: 0;
   padding: 0;
   background-color: #0e0e0e;
   /* background-color: #0e0e0e; */
   /* scroll-behavior: smooth; */
   /* overflow: hidden; */
}

#origin {
   width: 100vw;
   height: 100vh;
}

#landing {
   padding: 0 10vh 0 10vh;
}

.nav {
   padding-top: 100px;
   font-size: 16px;
   /* display: block; */
}

.nav:hover a {
   color: var(--green);
}

.nav img {
   float: left;
   padding-right: 40px;
}

#bar, #bar2 {
   margin-top: 32px; /* 32 pixels to accordingly float to bottom w/  50px logo */
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
   color: var(--green);
   /* add fade transition */
}

.underline {
   /* display: inline; */
   position: relative;
   /* overflow: hidden; */
}

.underline::after {
   content: '';
   position: absolute;
   z-index: 1;
   right: 0;
   width: 0;
   bottom: -12px;
   background: var(--green);
   height: 1px;
   transition-property: left right;
   transition-duration: 0.3s;
   transition-timing-function: ease-out;
}

.underline:hover::after, .underline:focus::after, .underline:active::after {
   left: 0;
   right: auto;
   width: 100%;
   color: var(--green);
}

#portfolio {
   display: flex;
   flex-wrap: wrap;
   /* flex-direction: row; */
   clear:both;
   padding: 120px 50px 0 50px;
   justify-content: center;
}

#imgcontainer {
   width: 300px;
   height: 300px;
   position: relative;
}

#imgrouter img{
   width: 300px;
   height: 300px;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

.imagehover {
   position: absolute;
   display: inline-block;
   width: 300px;
   height: 300px;
   opacity: 0;
   text-align: center;
}

.imagehover > p {
   display: inline-block;
   font-size: 20px;
   font-family: 'Inconsolata', sans-serif;
   margin-top: 45px;
   margin-bottom: 0;
   color: var(--white);
   border-bottom: 1px solid var(--white);
   text-transform: uppercase;
}

#subtext > p {
   font-size: 16px;
   font-family: 'Inconsolata', sans-serif;
   color: var(--white);
   text-transform: uppercase;
}

#covertext > p {
   display: inline-block;
   font-size: 20px;
   font-family: 'Inconsolata', sans-serif;
   color: var(--white);
   margin-top: 30px;
   text-transform: uppercase;

}

#imgcontainer:hover .imagehover {
   opacity: 1;
   transition: 0.1s;
}

#imgrouter:hover img {
   opacity: 0.2;
   transition: 0.1s;
}

#centerContainer {
   clear: both;
   font-family: 'Lora', serif;
   text-align: center;
}

#centerContainer > img, #centerContainer > video {
   width: 800px;
   padding: 45px 0;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

#img1600 {
   width: 1600px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

@media (max-width: 1720px) {
   #img1600 {
     width: 80vw !important;
   }
}

#img1300 {
   width: 1300px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

@media (max-width: 1420px) {
   #img1300 {
      width: 80vw !important;
   }
}

#img500 {
   width: 500px !important;
   padding: 25px 50px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}
#img500nopad {
   width: 500px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

#img350 {
   width: 350px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;

}

#imgH400 {
   height: 400px !important;
   user-select: none;
   -moz-user-select: none;
   -webkit-user-drag: none;
   -webkit-user-select: none;
   -ms-user-select: none;
}

#textContainerHeader {
   font-size: 40px;
   font-family: 'Inconsolata';
   color: var(--white);
   text-transform: uppercase;
   padding-top: 150px;
   padding-bottom: 75px;
}

#subHeader {
   font-size: 22px;
   padding-top: 20px;
}

#textContainerBody {
   padding: 25px 10vw;
   color: var(--offWhite);
   font-family: 'Lora', serif;
   font-size: 18px;
   /* font-weight: 300; */
   line-height: 140%;
}

#curriculumStructure {
   display: block;
   /* flex-wrap: wrap; */
}

#curriculumHeader {
   font-family: 'Inconsolata', sans-serif;
   text-transform: uppercase;
}

#curriculumBody {
   display: inherit;
   font-family: 'Lora', serif;
   color: var(--offWhite);
   font-size: 16px;
   line-height: 140%;
   width: 500px;
   padding: 25px 5vw;
   /* float: left; */
} 

#homefooter {
   position: absolute;
   font-family: 'Inconsolata', sans-serif;
   color: var(--offWhite);
   font-size: 16px;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;
   text-align: center;
   bottom: 5vh;
}

#homefooter, a {
   text-decoration: none;
   color: var(--offWhite);
}

#homefooter, a:hover {
   color: var(--white);
}

</style>

