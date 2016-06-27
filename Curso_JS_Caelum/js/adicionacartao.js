var adiciona = (function() {


  function adicionaCartao(conteudo) {

    //soma um no contador
    contador++;


    //cria btn remover
    var botaoRemove = $("<button>")
              .addClass("opcoesDoCartao-remove")
              .attr("data-ref", contador)
              .text("Remover")
              .click(removeCartao);

    //Cria div opcoes
    var opcoes = $("<div>")
              .addClass("opcoesDoCartao")
              .append(botaoRemove);

    var tipoCartao = decideTipoCartao(conteudo);


    var conteudoTag = $("<p>")
              .addClass("cartao-conteudo")
              .append(conteudo);

      // acrescenta o append para colocar a div opcies no cartao
    $("<div>").attr("id", "cartao_" + contador)
              .addClass("cartao")
              .addClass(tipoCartao)
              .append(opcoes)
              .append(conteudoTag)
              .prependTo(".mural");

  }

  return adicionaCartao;


})();
