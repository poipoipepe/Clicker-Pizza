novoTitulo = new Object();

function apertarBotaoAlerta() {
    document.getElementById('alerta').style.display = 'none';
}

// Mudar nome da pagina ao apertar botao
function mudarNomePag(novoTitulo) {
    document.getElementById("titulo").innerHTML = novoTitulo;
}

// Trocar paginas
function trocarPagina() {
    const novoTitulo = document.getElementById('nome-pizzaria').value;
    if(!novoTitulo) {
        alert("Digite um nome para sua pizzaria!");
        return;
    }
    localStorage.setItem("novoTitulo", novoTitulo);
    window.location.href = 'jogo.html';
}

// troca h1
document.getElementById("titulo").innerHTML = localStorage.getItem("novoTitulo");
// troca title
document.title = localStorage.getItem("novoTitulo");