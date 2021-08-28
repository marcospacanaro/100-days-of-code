document.body.onload = adcElemento;

function adcElemento () {
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Hello World!");
    divNova.appendChild(conteudoNovo);

    var divAtual = document.getElementById("div");
    document.body.insertBefore(divNova, divAtual);
}

console.log(divNova);










