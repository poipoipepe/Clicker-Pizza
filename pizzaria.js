function apertarBotaoAlerta() {
    document.getElementById('alerta').style.display = 'none';
}

botao = document.querySelector('#comecar');
botao.addEventListener('click', function() {
    let novoTitulo = document.querySelector('#nome-pizzaria').value;
    window.location.href = 'jogo.html';
    for (let i = 0; i < 40; i++) 
        document.title = novoTitulo;
});

