
function tocaSom(idElementoAudio){
     document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

const listaDeAudio = document.querySelectorAll('audio');

//console.log(listaDeTeclas)

let contador = 0;

while (contador < listaDeTeclas.length) {
    
    const tecla=listaDeTeclas[contador];

    const instrumento =tecla.classList[1];
    
    const IdAudio =`#som_${instrumento}`
    
    tecla.onclick= function(){
        tocaSom(IdAudio);
    }

    contador = contador+1;
}
