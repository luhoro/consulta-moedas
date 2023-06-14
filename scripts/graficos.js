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
        label: 'Dolar',
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


// GRAFICO YUAN
const graficoYuan = document.getElementById('graficoYuan')
const graficoParaYuan = new Chart(graficoYuan, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Yuan',
        data: [],
        borderWidth: 1,
      },
    ],
  },
})

let workerYuan = new Worker('./scripts/workers/workerYuan.js')
workerYuan.postMessage('cny')

workerDolar.addEventListener('message', event => {
  let tempo = geraHorario()
  let valor = event.data.ask
  exibeCotacao('yuan', 'yuans', valor)
  adicionarDados(graficoParaYuan, tempo, valor)
})


// GRAFICO POUND
const graficoPound = document.getElementById('graficoPound')
const graficoParaPound = new Chart(graficoPound, {
  type: 'line',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Pound',
        data: [],
        borderWidth: 1,
      },
    ],
  },
})

let workerPound = new Worker('./scripts/workers/workerPound.js')
workerPound.postMessage('gbp')

workerPound.addEventListener('message', event => {
  let tempo = geraHorario()
  let valor = event.data.ask
  exibeCotacao('pound', 'pounds', valor)
  adicionarDados(graficoParaPound, tempo, valor)
})