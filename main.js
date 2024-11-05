function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        alert('Elemento não encontrado');
    }
    // elemento.play();
    if (elemento != null) {
        elemento.play();
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //Código omitido

//Código omitido

tecla.onkeydown = function (evento) {
    console.log(evento.code)
    
    if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
    }


}

    //Código omitido

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
