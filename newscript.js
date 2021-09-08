// Dia 19 //

document.body.onload = adcElemento;

function adcElemento () {
    var divNova = document.createElement("div");
    var conteudoNovo = document.createTextNode("Hello World!");
    divNova.appendChild(conteudoNovo);

    var divAtual = document.getElementById("div");
    document.body.insertBefore(divNova, divAtual);
}

// Dia 21 // 

var novoTitulo = document.createElement("h1");
var novoParagrafo = document.createElement("p");
var texto = document.createTextNode("Conteúdo do parágrafo");

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");
body.appendChild(novoParagrafo);
















