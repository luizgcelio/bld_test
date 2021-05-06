<template>
  <div id="app">
    <RotasEntregas />
  </div>
</template>

<script>
import RotasEntregas from './components/RotasEntregas.vue'

export default {
  name: 'App',
  components: {
    RotasEntregas
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
