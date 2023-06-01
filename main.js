function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);
  
  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  }
  else{
    alert("elemento incorreto");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

const listaDeAudio = document.querySelectorAll("audio");

//console.log(listaDeTeclas)

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];

  const instrumento = tecla.classList[1];

  const IdAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(IdAudio);
  };

  tecla.onkeydown = function (evento) {
    //console.log(evento.code);
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    //console.log(evento.code);
    tecla.classList.remove("ativa");
  };
}
