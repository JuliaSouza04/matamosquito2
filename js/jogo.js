//alert("Bem Vindo!");

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var criarMosquitoTempo = 1500;
var pontos = 0;


// recupera o valor e salva em uma variavel
var nivel = localStorage.getItem("nivelJogo");

//tempo mosquito
if(nivel == 'facil'){
    criaMosquitoTempo = 1500;
}else if(nivel === 'medio'){
    criaMosquitoTempo = 1000;
}else if (nivel === 'dificl'){
    criaMosquitoTempo = 750;
}


function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vidas > 3){
            //Game Over
            window.location.href='gameover.html'


        }else{
            document.getElementById('v'+vidas).src="img/coracao_vazio.png"
            vidas++;

        }
    }
    
    var posicaoX =  Math.floor(Math.random() * largura) -90;
    var posicaoY = Math.floor (Math.random() * altura) -90;
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)

//Criar o elemento HTMl
    var mosquito = document.createElement('img');
    mosquito.src ='img/balao_novo.png';
    mosquito.className = tamanhoAleatorio() +' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id='mosquito';
    document.body.appendChild(mosquito);

    //matar o mosquito
    mosquito.onclick = function(){
       // alert("morreuu");
       pontos += 1;
       document.getElementById('pontos').innerHTML = pontos;

       this.remove();
    }


}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()* 3)
    switch(classe){
        case 0:
            return'mosquito1';
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3';
        }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random()* 3)
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB'; 
        }
}

var Cronometro = setInterval(function(){
    tempo -= 1 ;
    if(tempo < 0){
    window.location.href = 'vitoria.html';
    }else{
        document.getElementById('Cronometro').innerHTML = tempo;
    }

},1000)