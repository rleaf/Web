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
               <!-- <sharks /> -->
               <p>
                  <curriculumAbout/>
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
               <i style="color: var(--white); font-size: 14px">* Full CV available upon request</i>
               </div>
               <ul style="list-style-type: square; margin-bottom: 100px;">
                  <li>Bachelor of Arts in Graphic Design & Minor in Web Design</li>
                  <li>Media Design / Branding / Logo / Print Production / Photography</li>
                  <p>Languages & Software:</p>
                  <ul style="list-style-type: none;">
                     <li><i>Adobe CC</i></li>
                     <ul>
                        <ul>
                           <li>Photoshop</li>
                           <li>Illustrator</li>
                           <li>InDesign</li>
                           <li>After Effects</li>
                           <li>Premiere</li>
                        </ul>
                     </ul>
                     <li><i>MS Office</i></li>
                        <ul>
                           <ul>
                              <li>Word</li>
                              <li>Power Point</li>
                              <li>Excel</li>
                              <li>Access</li>
                           </ul>
                        </ul>
                     <li><i>HTML, CSS</i></li>
                     <li><i>JavaScript</i></li>
                     <ul>
                        <li style="list-style-type: none; font-size: 14px;"><i>Have worked with: </i></li>
                        <ul>
                           <li>jQuery</li>
                           <li>Vue</li>
                           <li>Three</li>
                           <li>GSAP</li>
                           </ul>
                        </ul>

                     <li><i>Python</i></li>
                        <ul>
                           <li style="list-style-type: none; font-size: 14px;"><i>Have worked with: </i></li>
                        <ul>
                           <li>Pandas</li>
                           <li>Scikit-learn</li>
                           <li>NumPy</li>
                        </ul>
                        </ul>
                  </ul>
               </ul>
            </div>
         </div>

      </div>
  </div>
</template>

<script>
import NavBar from '../components/nav.vue'
import curriculumAbout from '../components/curriculumAbout.vue'
// import sharks from '../components/sharks.vue'

export default {
   name: 'curriculum',
   components: {
      NavBar,
      curriculumAbout,
      // sharks
   },
}
</script>

<style scoped>

</style>