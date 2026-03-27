let preco = 101;
let desconto;

if(preco<100) {
    desconto = true;
}
else{
    desconto = false;
}

let mensagem = desconto == true ? preco * 0.9 : preco;
console.log(mensagem);