<template>
  <div id="app">
    <Discovery />
  </div>
</template>

<script>
import Discovery from './components/Discovery.vue';

export default {
  name: 'App',
  components: {
    Discovery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
