const aluno = {
    nome : "Henrico",
    idade : 15,
    curso : "desenvolvimento de sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A"; //adicionar
aluno.idade = 18; //alterar

delete aluno.curso; //remover

console.log(aluno);