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
        cozinheiro = cozinheiro + 0.2;
        Pizzas = Pizzas - precoCozinheiro;
        precoCozinheiro = precoCozinheiro + precoCozinheiro/25;
        compraCozinheiro.innerHTML = 'Cozinheiro: 0.2 Pizzas/s <strong>'+ quantCozinheiro +'</strong><br> Preço: ' + precoCozinheiro.toFixed(2) + ' Pizzas';
        Pizzas = Pizzas + cozinheiro;
        if (Pizzas >= 1000)
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
        else
            atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
    }
});

// atualiza a quantidade de pizzas
atualizaPizzas = document.querySelector('#numeroPizzas');

function update(){
    Pizzas = Pizzas + cozinheiro;
    if (Pizzas >= 1000)
        atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(0);
    else
        atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);
    
    console.log(cozinheiro);
}
setInterval(update, 1000);

// clique na pizza
let clique = document.querySelector('#clique');
clique.addEventListener('click', cliquePizza);
function cliquePizza(){
    Pizzas++;
    atualizaPizzas.innerHTML = 'Pizzas: ' + Pizzas.toFixed(2);

    console.log(Pizzas);
}


