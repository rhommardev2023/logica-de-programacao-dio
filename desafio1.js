// Declarando as variáveis
let hero = "Rhommar";        // Nome do heroe
let xp = 3500;                // Pontos de experiencia

// Variável do nível
let nivel = "";

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome **${hero}** está no nível de **${nivel}**`)
