(function() {


  document.querySelector("#mudaLayout").addEventListener("click", function() {

    //pega o elemento com a classe mural
    var mural = document.querySelector(".mural");

    //tira ou coloca a classe
    // aqui mural se refere a var setada anteriormente
    //classList verifica todas as classes de mural
    mural.classList.toggle("mural--linhas");

    // Se tiver ou nao a classe mural--linhas dentro de .mural ele ira alterar o texto
    if (mural.classList.contains("mural--linhas")) {
      this.textContent = "Blocos";
    } else {
      this.textContent = "Linhas";
    }


  });


})();
