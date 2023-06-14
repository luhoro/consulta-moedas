async function conectaAPI() {
  const conecta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
  const conectaJSON = await conecta.json()
  postMessage(conectaJSON.USDBRL)
}

addEventListener('message', event => {
  conectaAPI()
  setInterval( () => conectaAPI(), 5000)
})