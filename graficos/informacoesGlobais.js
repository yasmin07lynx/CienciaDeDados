
const url = 'https://raw.githubusercontent.com/yasmin07lynx/CienciaDeDados/refs/heads/main/BaseDeDados/esportes-dados-globais.json'

async function visualizarInformacoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        const pessoasAtletas = (dados.total_pessoas_que_praticam_esportes_regularmente) / 1e9
        const pessoasNoMundo = (dados.total_pessoas_mundo) / 1e9
        const horas = parseInt (dados.tempo_medio)
        const minutos = Math.round ((dados.tempo_medio_semana_praticando_esportes - horas) * 100)
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões </span>
        de pessoas e que aproximadamente <span>${pessoasAtletas} bilhões </span> estão 
        conectadas em alguma rede social e passam em média <span>${horas} horas </span> e <span> ${minutos} minutos </span> conectadas.`

        const container = document.getElementById ('graficos-container')
        container.appendChild(paragrafo)
    }
    visualizarInformacoesGlobais()