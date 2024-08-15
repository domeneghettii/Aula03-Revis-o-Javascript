//Definir a meta

let metaLivros = 6;

//Registrar os livros lidos

livrosLidos = ["É assim que acaba", "É assim que começa", "Eu e esse meu coração", "Uma farsa de amor na espanha", "Um experimento de amor em Nova York", "Amor em jogo"];

//Analisar o Progresso

for (let i = 0; i < livrosLidos.length; i++) {
    console.log("Livro lido: " + livrosLidos[i]);
}
//Verificar se a meta já foi atingida

if (livrosLidos.length >= metaLivros) {
    console.log("Parabéns! Você atingiu sua meta de leitura!"); 
} else {
    console.log("Você está progredindo! Faltam " + faltam + " livrospara atingir sua meta.");
}