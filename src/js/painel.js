const imagensPainel = document.querySelectorAll('.imagem-painel')
const setaAvancar = document.getElementById('btn-avancar')
const setaVoltar = document.getElementById("btn-voltar")
let imagemAtual = 0

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostraImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar')
}

// quando clicar ma seta pra avançar tenho que esconder 
// todas as imagens e mostra a proxima imagem

setaAvancar.addEventListener('click', function(){ 

    //testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length -1
    if(imagemAtual === totalDeImagens){
        return
    }

    imagemAtual++;

    //esconder todas imagens, e esconder a primeira apos o click
    esconderImagens()
    // mostrar proxima imagem
    mostraImagem()    
})

setaVoltar.addEventListener('click', function(){
   
    if(imagemAtual === 0){
        return
    }
   
    imagemAtual --

    esconderImagens()
    mostraImagem()
})