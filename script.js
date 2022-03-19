var altura = 0
var largura = 0

function tamanhoDaTela(){
    altura = innerHeight
    largura = innerHeight

    console.log(altura, largura)
}
tamanhoDaTela()

function posicaoRandomica(){
    var horizontal = Math.floor(Math.random() * largura)
    var vertical = Math.floor(Math.random() * altura)

    //criando elemento html

    var mosquito = document.createElement('img') //cria o elemento da imagem
    mosquito.src = 'imagens/mosquito.png' // adiciona a imagem no elemento
    mosquito.className = 'mosquito1' // aplica o estilo css na imagem
    mosquito.style.left = horizontal + 'px' // adiciona uma posição  hotizontal aleatória
    mosquito.style.top = vertical + 'px' // adiciona uma posição vertical aleatória
    mosquito.style.position = 'absolute' // coloca a imagem como absoluta
 
    document.body.appendChild(mosquito)

    // depois adicionar <script> com a função no body
}