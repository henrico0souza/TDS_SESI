function criarcauculadoradesconto(desconto) {
    return function(preco){
        return preco - (preco * desconto);
    }
}

const desconto10 = criarcauculadoradesconto(0.10);
const desconto50 = criarcauculadoradesconto(0.50);

console.log(desconto10(200));
console.log(desconto50(1230));