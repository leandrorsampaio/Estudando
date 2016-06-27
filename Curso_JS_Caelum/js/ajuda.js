(function() {

  $("#ajuda").click(function() {
      // Atencao! o metodo getJson nao tem chaves
      $.getJSON("https://ceep.herokuapp.com/cartoes/instrucoes"
                ,function(res) {
                    console.log(res);

                    // o "instrucoes" esta ai pois eh o nome do nó principal do json
                    res.instrucoes.forEach(function(cartao) {
                        adicionaCartao(cartao.conteudo, cartao.cor);
                    })

                }
              );
  });



})();
