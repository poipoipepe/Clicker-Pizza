let quantidadePizza = 0;
atualizaPizzas = document.querySelector('#numeroPizzas');

let clique = document.querySelector('#clique');

clique.addEventListener('click', function(){
    quantidadePizza++;
    atualizaPizzas.innerHTML = 'Pizzas: ' + quantidadePizza;

    console.log(quantidadePizza);
});
