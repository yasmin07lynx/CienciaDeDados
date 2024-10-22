
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais (){
const res = await fetch (url)
const dados = await res.json()
const horas = parseInt (dados.tempo_medio)
const minutos = Math.round ((dados.tempo_medio - horas) *100)
const paragrafo = document.createElement ('p')
paragrafo.classList.add('graficos-container__texto')
paragrafo.innerHTML = `Voce sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectados} estão conectados em alguma rede social e passam em média ${dados.tempo_medio} horas e <span>${minutos}</span> minutos conectadas.`

const container = document.getElementById( 'graficos-container')
container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()
