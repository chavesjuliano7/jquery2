var tempoInicial = $( '.tempo-segundos' ).text();
var campo= $('.campo-digitacao')



// $(document).ready( function () {

//     atualizarTamanhoDaFrase();

//     inicializarContadores();

//     inicializarCronometro();

//     zerarCronometro()

// })

$(function(){
    atualizarTamanhoDaFrase();
    inicializarContadores();
    inicializarCronometro();
    zerarCronometro();

})


function atualizarTamanhoDaFrase( ) {

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

    var tempoRestante = parseInt( $( '.tempo-segundos' ).text() );

    campo.one('focus', function( ){

        var intervalID = setInterval( function(){

            tempoRestante --

            if(tempoRestante < 1 ){

                campo.attr('disabled', true);

                clearInterval(intervalID)

            }

            $('.tempo-segundos').text(tempoRestante);

        }, 1000)

    })
}



function zerarCronometro() {

    var botao = $('#botao-reiniciar').on('click', function ( ) {

        $('.tempo-segundos').text(tempoInicial);
        $('.contador-caracteres').text('0');
        $('.contador-palavras').text('0')

        campo.attr('disabled', false)
        campo.val('');

        inicializarCronometro( )

    })
}






