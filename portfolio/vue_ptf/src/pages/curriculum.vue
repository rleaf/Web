<template>
  <div id="landing">
     <NavBar />
         <div id="textContainerHeader">
         </div>
         <div id="textContainerBody" style="padding-bottom: 100px; font-size: 18px;">
           <i style="padding-left: 50px;">* Full CV available upon request</i>
         </div>
      <!-- <div id="textContainerBody" style="font-size: 16px;"> -->
      <div id="textContainerBody">
         <u>Background & Skills</u>
         <ul style="list-style-type: square">
            <li>Bachelor of Arts in Graphic Design & Minor in Web Design</li>
            <li>Languages & Software</li>
            <ul style="list-style-type: none;">
               <li><i>HTML & CSS</i></li>
               <li><i>JavaScript</i></li>
               <li><i>Adobe CC</i></li>
               <li><i>MS Office</i></li>
            </ul>
            <li>Photography</li>
            <ul style="list-style-type: none;">
               <li><i>Astrophotography</i></li>
               <li><i>Composite</i></li>
               <li><i>Long Exposure</i></li>
            </ul>
            <li>Media Design / Branding / Logo / Print Production</li>
            <li>Workbook & Relational Database Organization & Visualization</li>
         </ul>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/nav.vue'

export default {
   name: 'curriculum',
   components: {
      NavBar
   }
}
</script>

<style>

</style>