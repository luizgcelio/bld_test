<template>
<div class="container">
  <button @click="fetchAPI" type="button" class="btn btn-primary">Carregar Rotas</button>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</div>
</template>

<script>
export default {
  name: 'RotasEntregas',

  mounted: function() {
    this.$store.dispatch('fetchApi')
  },

  data: function() {
    return {
      resultado: "",
      sum: 0,
    }
  },

  methods: {
    fetchAPI() {
      this.resultado = this.$store.state.data
      const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
      ];
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };
      const config = {
        type: 'line',
        data,
        options: {}
      };
      var myChart = new Chart(
        document.getElementById('myChart'),
        config
      );
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
