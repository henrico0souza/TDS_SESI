const clienteNome = {
    nome : "Henrico",
}

 var clienteidade = {
    idade : "15", 
}

var possuicupom = {
    cupom : true
}

console.log(clienteNome);
console.log(clienteidade);
console.log(possuicupom);

const componentes = ["culer", "monitor", "mouse", "placa de video, Memoria Ram"];
 
componentes.shift(componentes[0]);
componentes.push("CPU");


 console.log(componentes[0]);
 console.log(componentes[1]);
 console.log(componentes[2]);
 console.log(componentes[3]);
 console.log(componentes);

 function processarvenda (valorfinal, cupomativo, quantidadedeitens ) {
    valorfinal > 500|| cupomativo * 0.20|| quantidadedeitens >= 3
}

console.log(processarvenda(3000, 0.20, 3));