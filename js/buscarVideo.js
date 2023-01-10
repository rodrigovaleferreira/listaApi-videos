import { conectaAPI } from "./conectaAPI.js";
import controiCard from "./mostrarVideos.js";

async function buscarVideo(evento){
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
    const busca = await conectaAPI.buscaVideos(dadosDePesquisa)
    
    const lista = document.querySelector('[data-lista]')

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(controiCard(elemento.titulo,elemento.descricao,elemento.url,elemento.imagem)))

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeos com esse termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))