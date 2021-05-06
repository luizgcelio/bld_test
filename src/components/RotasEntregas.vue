<template>
<div class="container">
  <h1>Gráfico de Rotas BLD</h1>
  <p>Clique no botão abaixo para gerar a tabel com as rotas dos últimos 15 dias.</p>
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
      rotasJson: ""
    }
  },

  methods: {
    fetchAPI() {
      this.rotasJson = this.$store.state.data
      
      var dias = {}; // dicionario com as datas diferentes para somar a distancia
      var i;
      for(i=0; i<this.rotasJson.length; i++) { // criar um dicionario com varios contadores
        if(dias[this.rotasJson[i].date]==null) // para não ficar definindo 2 vezes = [0,0,0]
          dias[this.rotasJson[i].date] = [0,0,0]

        // para cada dia diferente, 3 contadores:
        // 1) quantidade kms rodados totais no dia
        // 2) quantidade rotas feitas naquele dia, para fazer a media
        // 3) valor total de multas do dia
      }

      
      for(i=0; i<this.rotasJson.length; i++) { // contar os dados das rotas
        var distancia = this.rotasJson[i].finalKm - this.rotasJson[i].initialKm
        dias[this.rotasJson[i].date][0] += distancia //posicao [0] = total km naquele dia
        dias[this.rotasJson[i].date][1] += 1 // posicao [1] = contador de rotas daquele dia
        dias[this.rotasJson[i].date][2] += this.rotasJson[i].finesTotalAmount // posicao [2] = total multas naquele dia
      }

      var dataDistanciaTotal = []
      var dataMultasTotal = []
      var dataMediaDistancia = []
      var variableLabels = [] 
      for (const [key, value] of Object.entries(dias)) { // preencher os vetores com dados
        variableLabels.push(key)
        dataDistanciaTotal.push(dias[key][0]) // preenche o vetor com as distancias totais por dia
        dataMultasTotal.push(dias[key][2]) // preenche o vetor com as multas totais por dia
        dataMediaDistancia.push(dias[key][0]/dias[key][1]) // preenche vetor com media da distancia
      }
      const labels = variableLabels // constante sera utilizado na criacao da tabela, e' o nome da label no X

      const data = { // dados a serem utilizados no grafico
        labels: labels,
        datasets: [
          {
            label: 'Total de Quilômetros Rodados',
            backgroundColor: '#28A745',
            borderColor: '#28A745',
            data: dataDistanciaTotal,
          },
          {
            label: 'Média Quilômetros Rodados',
            backgroundColor: '#FFC107',
            borderColor: '#FFC107',
            data: dataMediaDistancia,
          },
          {
            label: 'Total de Multas',
            backgroundColor: '#17A2B8',
            borderColor: '#17A2B8',
            data: dataMultasTotal,
          },
          
        ]
      };

      const config = { // configuracao do grafico
        type: 'line',
        data,
        options: {}
      };
      
      // criacao do grafico
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
