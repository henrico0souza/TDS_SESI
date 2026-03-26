/*
atalho comentario de varias linhas
alt + shift + A

desafio: creioa uma função que receba preço e desconto em %
e mostre o valor final do desconto.
criar outra função que receba preço e quantidade
criar outra funçãoo que receba preço e quanridade
e mostre o valor total de compra.

*/

function cauculardesconto(preco, desconto) {
    const valorfinal = preco - (preco * (desconto / 100));
    console.log('o desconto foi de: ${valorfinal}');
}

cauculardesconto(1000, 5);


function cauculartota(preco, quantidade) {
    const valortotal = preco * quantidade;
    console.log('o valor total e de: ${valortotal}');
}

cauculartotal(100, 12);