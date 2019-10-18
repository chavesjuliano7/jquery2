var tempoInicial = $( '.tempo-segundos' ).text();
var campo= $('.campo-digitacao')



// $(document).ready( function () {

//     atualizarTamanhoDaFrase();

//     inicializarContadores();

//     inicializarCronometro();

//      $('#botao-reiniciar').click(reiniciarJogo)

// })

$(function(){

    fraseAleatoria()
    atualizaPlacar()
    atualizarTamanhoDaFrase();
    inicializarContadores();
    inicializarCronometro();
    inicializaMarcadores();
    $('#botao-reiniciar').click(reiniciarJogo)
    $('.botao-remover').on('click', deletaLinha);


})


function atualizarTamanhoDaFrase() {

    var frase = $(".frase").text();

    var numPalavras = frase.split(" ").length;

    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);

}


function inicializarContadores( ) {

    campo.on( 'input', function( ){

        var conteudo = campo.val();

        var qtdPalavras = $('.contador-palavras');
        qtdPalavras.text(conteudo.split(/\S+/).length - 1);

        var qdtCaracteres = $('.contador-caracteres')
        qdtCaracteres.text(conteudo.length)

    })

}


function inicializarCronometro( ) {


    var botao = $('#botao-reiniciar')

    campo.one('focus', function( ){
        var tempoRestante = parseInt( $( '.tempo-segundos' ).text() );

        botao.attr('disabled', true);

        var intervalID = setInterval( function(){

            tempoRestante --

            if(tempoRestante < 1 ){

                botao.attr('disabled', false);

                clearInterval(intervalID);

                finalizaJogo();

            }

            $('.tempo-segundos').text(tempoRestante);

        }, 1000)

    })
}


function finalizaJogo() {

    campo.attr('disabled', true);
    campo.toggleClass('campo-desativado');
    inserePlacar();
}




function reiniciarJogo( ) {

    $('.tempo-segundos').text(tempoInicial);
    $('.contador-caracteres').text('0');
    $('.contador-palavras').text('0')
    campo.toggleClass('campo-desativado');


    campo.attr('disabled', false)
    campo.val('');
    campo.removeClass('borda-verde')
    campo.removeClass('borda-vermelha')

    inicializarCronometro( )
    fraseAleatoria();
}


function inicializaMarcadores( ) {

    campo.on('input', function () {
    // console.log("ECMA Script 6".startsWith("E"));
        var frase = $('.frase').text()
        var digitado = campo.val()
        var comparavel = frase.startsWith(digitado)
        // var comparavel = frase.substring(digitado.length,0);
        // digitado == comparavel ? console.log('ok') : console.log('errado');
        // console.log(digitado == comparavel);

        if ( comparavel ){

            campo.removeClass('borda-vermelha')
            campo.addClass('borda-verde')


        } else {

            campo.removeClass('borda-verde')
            campo.addClass('borda-vermelha')
        }


        // if ( digitado == comparavel ){

        //     campo.removeClass('borda-vermelha')
        //     campo.addClass('borda-verde')


        // } else {

        //     campo.removeClass('borda-verde')
        //     campo.addClass('borda-vermelha')
        // }

    })
}
