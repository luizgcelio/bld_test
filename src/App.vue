<template>
  <div id="app">
    <nav class="navbar navbar-light navbarControl">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="logo.png" class="logo">
          BLD Logística 
        </a>
      </div>
    </nav>
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
  
}
body {
  background-color: rgba(0,0,0,0.02);
}

.logo {
  max-height: 40px;
}

.navbarControl {
  background-color: white;
  margin-bottom: 20px;
}
</style>
