async function conectaAPI() {
  const conecta = await fetch('https://economia.awesomeapi.com.br/last/CNY-BRL')
  const conectaJSON = await conecta.json()
  postMessage(conectaJSON.CNYBRL)
}

addEventListener('message', event => {
  conectaAPI()
  setInterval( () => conectaAPI(), 5000)
})