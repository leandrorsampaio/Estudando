(function() {

  // sistema de busca (SIMPLIFICADO)
  $("#busca").on("input", function() {

    // guarda o valor digitado
    var busca = $(this).val().trim();

    if(busca.length) {

          $(".cartao").hide().filter(function() {
              return $(this).find(".cartao-conteudo").text().match(new RegExp(busca, "i"));
          }).show();

    } else {
        $(".cartao").show();
    }

  });

  /*
  //
  // UMA SEGUNDA FORMA DE FAZER MAIS COMPLEXA QUE FAZ COM QUE AS PALAVRAS BUSCADAS FIQUEM AZUL
  //
  //
  // sistema de busca
  $("#busca").on("input", function() {

    // guarda o valor digitado
    var busca = $(this).val().trim();

        $(".cartao").hide().filter(function() {
            var cartaoConteudo = $(this).find(".cartao-conteudo");
            var conteudo = cartaoConteudo.text();
            var padrao = new RegExp("("+busca+")", "ig");
            cartaoConteudo.html(conteudo.replace(padrao, "<span style='background:cyan'>$1</span>"));
            return conteudo.match(padrao);

        }).show();

  });
  */


})();
