var altura = 0
var largura = 0
var vidas = 1 // variavem pára criar dinamicamente a o id das vidas
var tempo = 10

function tamanhoDaTela(){
    altura = window.innerHeight
    largura = window.innerWidth

}
tamanhoDaTela()

var cronometro = setInterval(function(){
    tempo--
    
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        alert('Vitoria')
    }else{
        document.getElementById('cronometro').innerHTML = tempo 
    }
    
},1000)

function posicaoRandomica(){

    //remover o mosquito caso exista
    if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'game_over.html'
        }else{
        
        document.getElementById('v'+ vidas).src = "imagens/coracao_vazio.png"
        
        vidas++
        }
	}

    var horizontal = Math.floor(Math.random() * largura) - 90
    var vertical = Math.floor(Math.random() * altura) - 90

    horizontal = horizontal < 0 ? 0 : horizontal // se posição x for menor que zero então recebe 0 (ele mesmo na posição original)
    vertical = vertical < 0 ? 0 : vertical // se posição y for menor que zero entapo recebe 0 (ele mesmo na posição original)

    //criando elemento html

    var mosquito = document.createElement('img') //cria o elemento da imagem
    mosquito.src = 'imagens/mosquito.png' // adiciona a imagem no elemento
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // aplica o estilo css na imagem  ( codigo anterior mosquito.className = 'mosquito1')
    mosquito.style.left = horizontal + 'px' // adiciona uma posição  hotizontal aleatória
    mosquito.style.top = vertical + 'px' // adiciona uma posição vertical aleatória
    mosquito.style.position = 'absolute' // coloca a imagem como absoluta
    mosquito.id = 'mosquito' //adiciondo id ao objeto mosquito
    mosquito.onclick = function () {    //adicionando a função de clique no objeto
        this.remove()
    }
 
    document.body.appendChild(mosquito)

    // depois adicionar <script> com a função no body
}
 
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    if (classe == 0) {
        return 'mosquito1'
    } else if (classe == 1) {
        return 'mosquito2'
    }else{
        return 'mosquito3'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    if (classe == 0) {
        return 'ladoA'
    } else{
        return 'ladoB'
    }
}


