//Arrays de ingredientes

let paes = ["Pão Australiano", "Pão Brioche", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

//Criar o array do hambúrguer
let hamburguer = [];

//Selecionar os ingredientes

hamburguer.push(paes[1]); //Pão Brioche
hamburguer.push(molhos[0]); //Maionese
hamburguer.push(saladas[2]); //Cebola
hamburguer.push(carnes[0]); //Carne Bovina
hamburguer.push(queijos[2]); //Queijo Prato

// Exibir o hambúrguer
hamburguer.forEach(ingrediente => {
    console.log(ingrediente);
});