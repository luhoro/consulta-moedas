import exibeCotacao from './exibeCotacao.js'

function geraHorario() {
  let data = new Date()
  let horario = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
  return horario

}

function adicionarDados(grafico, legenda, dados) {
  grafico.data.labels.push(legenda)
  grafico.data.datasets.forEach(dataset => dataset.data.push(dados)) 
  grafico.update()
}


// GRAFICO DOLAR
const graficoDolar = document.getElementById('graficoDolar')
const graficoParaDolar = new Chart(graficoDolar, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Dólar',
        data: [],
        borderWidth: 1,
      },
    ],
  },
})

let workerDolar = new Worker('./scripts/workers/workerDolar.js')
workerDolar.postMessage('usd')

workerDolar.addEventListener('message', event => {
  let tempo = geraHorario()
  let valor = event.data.ask
  exibeCotacao('dolar', 'dolars', valor)
  adicionarDados(graficoParaDolar, tempo, valor)
})

