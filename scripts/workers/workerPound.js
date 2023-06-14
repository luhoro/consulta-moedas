async function conectaAPI() {
  const conecta = await fetch('https://economia.awesomeapi.com.br/last/GBP-BRL')
  const conectaJSON = await conecta.json()
  postMessage(conectaJSON.GBPBRL)
}

addEventListener('message', event => {
  conectaAPI()
  setInterval( () => conectaAPI(), 5000)
})