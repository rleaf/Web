<template>
  <div id="landing">
    <h1>This portion of the site is still being built <br><br> :)</h1>
    <h2>Updated {{date}}</h2>
  </div>
</template>

<script>

export default {
  components: {
    },
    data: function() {
      return {
        date: '2/28/20'
      }
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

h2 {
  clear: both;
  text-align: center;
  font-family: 'Inconsolata', sans-serif;
  font-size: 20px;
  font-weight: 200;
  color: var(--white);
  font-style: italic;
  padding-top: 25px;
}

</style>