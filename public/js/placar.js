function inserePlacar() {

    var corpoTabela = $('.placar').find('tbody');
    var usuario = 'seuNome';
    var numPalavras = $('.contador-palavras').text();
    // var linha = '<tr>' +
    //                 '<td>' + usuario + '</td>' +
    //                 '<td>'+ numPalavras + '</td>' +
    //                 '<td>'+ botaoRemover + '</td>' +
    //             '</tr>';
    var linha = novaLinha(usuario, numPalavras);
    linha.find('.botao-remover').on('click', deletaLinha)
    corpoTabela.prepend(linha);

}


function deletaLinha( ) {

    event.preventDefault();
    $(this).parent().parent().remove();

}



function novaLinha(usuario, palavras) {

    var linha = $('<tr>');
    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavaras = $('<td>').text(palavras);
    var colunaRemover = $('<td>');
    var link = $('<a>').attr('href','#').addClass('botao-remover');
    var icone = $('<i>').addClass("small material-icons").text('delete');

    link.append(icone);
    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavaras);
    linha.append(colunaRemover);

    return linha;
}
