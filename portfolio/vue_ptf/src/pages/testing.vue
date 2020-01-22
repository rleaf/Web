<template>
  <div id="landing">
    <NavBar />
    <h1>This is a test page</h1>
  </div>
</template>

<script>
import NavBar from '../components/nav.vue'


console.log('test');


export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>

h1 {
  clear: both;
  text-align: center;
  padding-top: 300px;
  font-family: 'Inconsolata', sans-serif;
  font-weight: 200;
  color: var(--white);
}

</style>