// A 

const produto = {
    nome: "Mouse",
    preco: "R$" + 80,
    stoque: "1"
}

// B

console.log('O produto ${produto.nome} tem no estoque ${produto.estoque} valor do produto é de ${produto.preco} reais');

// C

if(produto.stoque != false) {
    console.log("Disponibilidade : twm no esqoque");

}else{
    console.log("disponibilidade : nao tem no estoque");
}
