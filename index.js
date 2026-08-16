let nomeHeroi = "Davi";
let xpHeroi = 7200;
let nivelHeroi = "";

// Simula três etapas de treinamento para praticar laço de repetição.
for (let treino = 1; treino <= 3; treino++) {
  xpHeroi += 100;
}

if (xpHeroi <= 1000) {
  nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
  nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
  nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
  nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
  nivelHeroi = "Imortal";
} else {
  nivelHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
