<template>

  <div id="landing">
     <NavBar />
     <div id="portfolio">
        <PortfolioObjects />
     </div>
  </div>

</template>

<script>
   import NavBar from '../components/NavBar.vue'
   import PortfolioObjects from '../components/PortfolioObjects.vue'

export default {
   name: 'landing',
   components: {
      NavBar,
      PortfolioObjects
   },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

:root {
   --green: #6baf76;
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
   background: var(--green);
}

::-webkit-scrollbar-thumb:hover {
   background: var(--green);
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
   color: var(--green);
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
   background: var(--green);
   height: 2px;
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