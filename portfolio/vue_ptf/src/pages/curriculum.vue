<template>
  <div id="landing">
     <NavBar />
         <div id="textContainerHeader">
         </div>
      <!-- <div id="textContainerBody" style="font-size: 16px;"> -->
         <div id="curriculumBody">
            <div>
               <div id="curriculumHeader">
                  <u style="font-size: 18px;">About</u>
               </div>
               <p>Hello my name is Ryan Lin. This site is intended to provide a synopsis of what I enjoy doing and who I am.
                  Amongst what is already mentioned below, I also enjoy
                  <a href='https://www.youtube.com/channel/UCe8X-Ib4hEc7keoBQ7cMdmA' target='_blank' style="color: var(--green);">power / olympic lifting</a>,
                  <a href='https://www.instagram.com/ryli.d/' target='_blank' style="color: var(--green);">eating / cooking</a>, and playing games.
               </p>
            </div>
         </div>
      <div id="curriculumStructure">
         <div id="curriculumBody">
            <div>
               <div id="curriculumHeader">
                  <u style="font-size: 18px;">Background & Skills</u>
               </div>
               <div  style="padding-bottom: 0;">
               <i style="padding-left: 0px;">* Full CV available upon request</i>
               </div>

               <ul style="list-style-type: square; margin-bottom: 100px;">
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