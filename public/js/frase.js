
 $('#botao-frase').on('click', fraseAleatoria);
 $('#botao-frase-id').click(buscaFrase);


function fraseAleatoria() {
    $('#spinner').toggle();
    // mostra o spinner
    var servidor = 'http://localhost:3000/frases';

    $.get(servidor, trocaFraseAleatoria)

    .fail(function () {
        var msgErro = $('#erro');
        msgErro.toggle();

        setTimeout(function () {
            msgErro.hide();
        }, 2000)
    })

    .always( function () {
        $('#spinner').toggle();
        // esconde o spinner
    })


}




function trocaFraseAleatoria(data) {

    var indice = gerarNumeroAleatorio(data);

    var fraseDoServidor = data[indice].texto;

    var tempoDoServidor = data[indice].tempo;

    $('#frase-texto').text(fraseDoServidor);
    $('.campo-digitacao').removeClass('campo-desativado')

    atualizaTempoInicial(tempoDoServidor)
    atualizarTamanhoDaFrase()


}


function atualizaTempoInicial(tempo) {

    tempoInicial = tempo
    $('.tempo-segundos').text(tempo);
}


function gerarNumeroAleatorio(data) {

    var numero =  Math.floor( Math.random() * data.length );

    return numero;
}






// metodo POST




function buscaFrase() {

    var fraseId = $('#frase-id').val();
    var dados = {id: fraseId}

    var servidor = 'http://localhost:3000/frases';

    $.get(servidor,dados,trocaFrase)

        // var frase = data[fraseID].texto
        // console.log(data);


        //  ;

}

function trocaFrase(data) {

    $('#frase-texto').text(data.texto)

    $( '.tempo-segundos' ).text(data.tempo);
    atualizarTamanhoDaFrase();
}