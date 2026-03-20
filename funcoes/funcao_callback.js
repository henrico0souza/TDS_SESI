function processoperdido(valor, quantidade, operacao) {
    return operacao(valor, quantidade);
}

function cauculartotal(preco, qtd){
    return preco * qtd;
}

let resultado = processoperdido(30, 50, cauculartotal);

// imprimir com template string
console.log('total do pedido: R$ ${resultado}');