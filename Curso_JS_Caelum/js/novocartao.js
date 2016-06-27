(function() {


  //criando contador
  var contador = $(".cartao").length;

  $(".novoCartao").submit(function(event) {

    var campoConteudo = $(".novoCartao-conteudo");
    var conteudo = campoConteudo
                    .val()
                    .trim()
                    .replace(/\n+/g, "<br>") // Qubra de linha
                    // o $1 pega o conteudo do (.+)
                    .replace(/\*\*(.+)\*\*/, "<b>$1</b>") // negrito com ** (regex)
                    .replace(/\*(.+)\*/, "<em>$1</em>"); // italico com * (regex)

    if(conteudo) {

        // funcao q adiciona os cartoes
        adicionaCartao(conteudo);

        //remove o conteudo escrito apos o submit
        campoConteudo.val("");

        //impede o recarrecamento da pagina, pq esse eh o comportamento default do submit
        event.preventDefault();


    }


  });


})();
