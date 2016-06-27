

(function() {

  // QUando clica no botao salvar
  $("#sync").click(function(){

      // quando clica remove a clase, caso ela ainda exista
      $("#sync").removeClass("botaoSync--sincronizado");

      // quando clica adiciona a classe sync girando
      $("#sync").addClass("botaoSync--esperando");


      // cria uma lista para colcoar todos os objetos (todos os cartoes)
      var cartoes = [];

      $(".cartao").each(function() {
          var cartao = {};
          cartao.conteudo = $(this).find(".cartao-conteudo").html();
          cartoes.push(cartao);
      });

      // escolhendo nome de usuario
      var mural = {
          usuario: usuario,
          cartoes: cartoes
      };

      // Atencao! o metodo ajax pede chaves
      $.ajax({
          url: "https://ceep.herokuapp.com/cartoes/salvar",
          data: mural,
          method: "POST",
          success: function(res) {
            $("#sync").addClass("botaoSync--sincronizado");
              console.log(res.quantidade + " cartoes salvos em " + res.usuario);
          },
          error: function() {
            $("#sync").addClass("botaoSync--deuRuim");
              console.log("Nao foi possivel salvar o mural");
          },
          complete: function() {
            $("#sync").removeClass("botaoSync--esperando");

            // retira a classe do btn azul depois de um tempo
            setTimeout (function(){
                $("#sync").removeClass("botaoSync--sincronizado");
            }, 2000);

          },
      });

  });

  //
  var usuario = "leandro.r.sampaio@gmail.com";
  $.getJSON("https://ceep.herokuapp.com/cartoes/carregar?callback=?",
            {usuario: usuario},
            function(res) {
                var cartoes = res.cartoes;
                console.log(cartoes.length + " carregados em " + res.usuario);
                cartoes.forEach(function(cartao) {
                    adiciona(cartao.conteudo);
                });
            }
  );

})();
