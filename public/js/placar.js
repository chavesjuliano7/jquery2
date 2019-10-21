// var placar =  $('.placar');

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $('#usuarios').val();
    var numPalavras = $(".contador-palavras").text();
    // var linha = '<tr>' +
    //                 '<td>' + usuario + '</td>' +
    //                 '<td>'+ numPalavras + '</td>' +
    //                 '<td>'+ botaoRemover + '</td>' +
    //             '</tr>';
    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").on("click", deletaLinha);
    corpoTabela.prepend(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
}

function deletaLinha() {
    event.preventDefault();

    var linha = $(this).parent().parent();

    linha.fadeOut(1000, function () {
        $(this).remove();
    });

    // setTimeout(function () {
    //     linha.remove();
    // },1000)
}

function novaLinha(usuario, palavras) {

    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavaras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");
    var link = $("<a>").attr("href", "#").addClass("botao-remover");
    var icone = $("<i>").addClass("small material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavaras);
    linha.append(colunaRemover);

    scrollPlacar();

    return linha;
}

function scrollPlacar() {
    var posicaoTop = $(".placar").offset().top;

    $("html").animate({
        scrollTop: posicaoTop
    }, 1000);
}

$("#botao-placar").click(mostrarPlacar);

function mostrarPlacar() {
    var placar = $(".placar");
    placar.stop();
    placar.slideToggle(600);
    scrollPlacar();
}

$('#botao-sync').click(sicronizaPlacar);

function sicronizaPlacar() {

    var servidor = 'http://localhost:3000/placar';

    var placar = [];

    var linhas = $('tbody > tr');


    linhas.each(function ( ) {

        var usuario = $(this).find('td:nth-child(1)').text();
        var palavras = $(this).find('td:nth-child(2)').text();

        var score = {
            usuario: usuario,
            ponto: palavras
        }

        placar.push(score)

    });

    var dados = {
      placar: placar
    }


    $.post(servidor, dados, function () {

        console.log('salvou no documento');
        $('.tooltip').tooltipster('open');

    })

    .fail( function () {
        $('.tooltip').tooltipster('open').tooltipster('content', 'Falha ao sincronizar');
    })


    .always(function () {

        setTimeout(function () {

            console.log('passei')
            $('.tooltip').tooltipster('close');

        }, 1200)
    });

}



function atualizaPlacar() {

    var servidor = 'http://localhost:3000/placar';

    $.get(servidor,function (data) {
        $(data).each(function(){

            var linha = novaLinha(this.usuario, this.ponto)

            $('tbody').append(linha);
            linha.find(".botao-remover").on("click", deletaLinha);
            });

        });

}