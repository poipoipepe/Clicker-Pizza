// quantidade inicial de pizzas
let Pizzas = 0;

// cozinheiro
let cozinheiro = 0;
let quantCozinheiro = 0;
let precoCozinheiro = 10;
let compraCozinheiro = document.querySelector('#cozinheiro');
compraCozinheiro.addEventListener('click', function(){
    if (Pizzas >= precoCozinheiro){
        quantCozinheiro++;
        cozinheiro = cozinheiro + 0.1;
        Pizzas = Pizzas - precoCozinheiro;
        precoCozinheiro = precoCozinheiro + precoCozinheiro/20;
        compraCozinheiro.innerHTML = 'Cozinheiro: 0.1 Pizzas/s <strong>'+ quantCozinheiro +'</strong><br> Preço: ' + precoCozinheiro.toFixed(2) + ' Pizzas';
        Pizzas = Pizzas + cozinheiro;
        if (Pizzas >= 1000)
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
        else
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
    }
});

// forno
let forno = 0;
let quantForno = 0;
let precoForno = 50;
let compraForno = document.querySelector('#forno');
compraForno.addEventListener('click', function () {
    if (Pizzas >= precoForno) {
        quantForno++;
        forno = forno + 0.5;
        Pizzas = Pizzas - precoForno;
        precoForno = precoForno + precoForno/20;
        compraForno.innerHTML = 'Forno: 0.5 Pizzas/s <strong>'+ quantForno +'</strong><br> Preço: '+ precoForno.toFixed(2) +' Pizzas';
        Pizzas = Pizzas + forno;
        if (Pizzas >= 1000)
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
        else
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
    }
});

// restaurante
let restaurante = 0;
let quantRestaurante = 0;
let precoRestaurante = 100;
let compraRestaurante = document.querySelector('#restaurante');
compraRestaurante.addEventListener('click', function () {
    if (Pizzas >= precoRestaurante) {
        quantRestaurante++;
        restaurante = restaurante + 1;
        Pizzas = Pizzas - precoRestaurante;
        precoRestaurante = precoRestaurante + precoRestaurante/20;
        compraRestaurante.innerHTML = 'Restaurante: 1 Pizzas/s <strong>' + quantRestaurante + '</strong><br> Preço: ' + precoRestaurante.toFixed(2) + ' Pizzas';
        Pizzas = Pizzas + restaurante;
        if (Pizzas >= 1000)
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
        else
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
    }
});

// fabrica
let fabrica = 0;
let quantFabrica = 0;
let precoFabrica = 500;
let compraFabrica = document.querySelector('#fabrica');
compraFabrica.addEventListener('click', function () {
    if (Pizzas >= precoFabrica) {
        quantFabrica++;
        fabrica = fabrica + 5;
        Pizzas = Pizzas - precoFabrica;
        precoFabrica = precoFabrica + precoFabrica / 20;
        compraFabrica.innerHTML = 'Fábrica: 5 Pizzas/s <strong>' + quantFabrica + '</strong><br> Preço: ' + precoFabrica.toFixed(2) + ' Pizzas';
        Pizzas = Pizzas + fabrica;
        if (Pizzas >= 1000)
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
        else
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
    }
});

// maquina
let maquina = 0;
let quantMaquina = 0;
let precoMaquina = 1000;
let compraMaquina = document.querySelector('#maquina');
compraMaquina.addEventListener('click', function () {
    if (Pizzas >= precoMaquina) {
        quantMaquina++;
        maquina = maquina + 10;
        Pizzas = Pizzas - precoMaquina;
        precoMaquina = precoMaquina + precoMaquina / 20;
        compraMaquina.innerHTML = 'Máquina do ta chovendo hambuguer: 10 Pizzas/s <strong>' + quantMaquina + '</strong><br> Preço: ' + precoMaquina.toFixed(2) + ' Pizzas';
        Pizzas = Pizzas + maquina;
        if (Pizzas >= 1000)
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
        else
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
    }
});


// atualiza a quantidade de pizzas
atualizaPizzas = document.querySelector('#numeroPizzas');

function update(){
    Pizzas = Pizzas + cozinheiro + forno + restaurante + fabrica + maquina;
    if (Pizzas >= 1000)
        atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
    else
        atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
}
setInterval(update, 1000);

// clique na pizza
let clique = document.querySelector('#clique');
clique.addEventListener('click', cliquePizza);
function cliquePizza(){
    Pizzas++;
    if (Pizzas >= 1000)
        atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
    else
        atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
}

// Finalizar o jogo

function verify(){
    if (Pizzas > 10000) {
        document.getElementById("fimDeJogo").style.display="flex";
    }
}
let veririficar = setInterval(verify, 1000);

function apertarBotaoFim() {
    document.getElementById("fimDeJogo").style.display = "none";
    clearInterval(veririficar);
}