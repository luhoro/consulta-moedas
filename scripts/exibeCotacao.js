const lista = document.querySelectorAll('[data-lista]')

function exibeCotacao(nome, nomePlural, valor) {

  lista.forEach(listaEscolhida => {
    if(listaEscolhida.id == nome) {
    imprimeCotacao(listaEscolhida, nome, nomePlural, valor)
    }
  })
}

function imprimeCotacao(lista, nome, nomePlural, valor) {
  lista.innerHTML = ''
  const valoresMult = [ 1, 5, 20, 100, 500, 1000, 5000 ]
  
  valoresMult.forEach(valorFixo => {
    valorFixo === 1 ? criaCotacao(nome) : criaCotacao(nomePlural)

    function criaCotacao(moeda) {
      const listaItem = document.createElement('li')
      listaItem.innerHTML = `${valorFixo} ${moeda}: R$${(valor * valorFixo).toFixed(2)}`
      lista.appendChild(listaItem)
    }
  })
}

export default exibeCotacao