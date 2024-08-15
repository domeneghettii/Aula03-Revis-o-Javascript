//Criar artesanal

let armas = ["Laser", "Mísseis", "Canhão de Plasma", "Lança-Chamas", "Punhos de Titânio"];

//Robô Atacante
let ataques = [];

//Nome do Robô
ataques[0] = "Titan-300";
console.log("Nome: " + ataques[0]);

//Plano de Ataque
ataques.push(armas[0]); //Adiciona "Laser"
ataques.push(armas[2]); //Adiciona "Canhão de Plasma"
ataques.push(armas[1]); //Adiciona "Mísseis"
ataques.push(armas[4]); //Adiciona "Punhos de Titânio"
ataques.push(armas[3]); //Adiciona "Lança-Chamas"

//Relatório de Ataque

for (let i = 1; i < ataques.length; i++) {
    console.log("Ataque " + i + ": " + ataques[i]);
}