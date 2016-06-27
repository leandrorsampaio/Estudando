(function() {



  function removeCartao() {
    var cartao = document.querySelector("#cartao_" + this.dataset.ref);

    //da a classe q faz ele sumir devagar
    cartao.classList.add("cartao--some");

    //Tira da pagina depois da animacao (no css ela ta definida em 0.2s)
    setTimeout(function(){
      cartao.remove();
    }, 400);
  }
  //Pega os botoes
  var botoes = document.querySelectorAll(".opcoesDoCartao-remove");

  //adiciona o evento de cada botao
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", removeCartao);
  }
  console.log(botoes);



})();
