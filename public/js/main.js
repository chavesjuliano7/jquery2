var tempoInicial = $( '.tempo-segundos' ).text();
var campo= $('.campo-digitacao')
var frase = $('.frase').text()



// $(document).ready( function () {

//     atualizarTamanhoDaFrase();

//     inicializarContadores();

//     inicializarCronometro();

//      $('#botao-reiniciar').click(reiniciarJogo)

// })

$(function(){
    atualizarTamanhoDaFrase();
    inicializarContadores();
    inicializarCronometro();
    inicializaMarcadores();
    $('#botao-reiniciar').click(reiniciarJogo)

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
    var botao = $('#botao-reiniciar')

    campo.one('focus', function( ){

            botao.attr('disabled', true);

        var intervalID = setInterval( function(){

            tempoRestante --

            if(tempoRestante < 1 ){

                botao.attr('disabled', false);

                campo.attr('disabled', true);

                clearInterval(intervalID);

                campo.toggleClass('campo-desativado');

            }

            $('.tempo-segundos').text(tempoRestante);

        }, 1000)

    })
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

}

function inicializaMarcadores( ) {

    campo.on('input', function () {

        var digitado = campo.val()
        var comparavel = frase.substr(0, digitado.length )

        digitado == comparavel ? console.log('ok') : console.log('errado');

        if ( digitado == comparavel ){

            campo.removeClass('borda-vermelha')
            campo.addClass('borda-verde')


        } else {

            campo.removeClass('borda-verde')
            campo.addClass('borda-vermelha')
        }

    })
}


console.log("ECMA Script 6".startsWith("ECMdA"));

