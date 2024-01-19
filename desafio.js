//Criação do personagem

let nickname = "Thorn";
let type = "Necromancer";
let aboutHero =
  nickname +
  " Um " +
  type +
  " que utiliza uma espada que absorve a alma de seus inimigos";

console.log("Coloque um nome no seu personagem: " + nickname);

console.log("Esscolha a classe de " + nickname + ": " + type);

console.log(aboutHero);

console.log("Bem vindo(a) " + nickname);

//Caminho para o Castelo
let lockpick = 30;
let needLevel = true;
let key = "Chave da Prisão";
let passagem = key === "Chave do Castelo" || lockpick === 30;

console.log(
  nickname +
    " chegou na entrada do Castelo, o(a) personagem tem a Chave do Castelo ou o level necessário em Lockpick? " +
    passagem
);

console.log(nickname + " conseguiu entrar no castelo");

// Inimigos
let enemies = "Slime";

switch (enemies) {
  case "Slime":
    console.log("Você matou um Slime, +8XP ");

  case "Ghoul":
    console.log("Você matou um Ghoul, +12XP");

  case "Destroçador":
    console.log("Você matou um Destroçador, +100Xp");

  case "Boss Stalker":
    console.log("Você novamente derrotou Stalker, +250XP");
}

// Stamina

let fomeEvigor = 3;

if (fomeEvigor === 1) {
  console.log(nickname + " está um pouco cansado");
} else if (fomeEvigor === 2) {
  console.log(nickname + " está cansado");
} else {
  console.log(nickname + " está muito cansado");
}

let stamina = 0;

console.log(nickname + " bebeu uma poção de Vigor!");

for (let i = 1; i <= 5; i++) {
  stamina += 1;
  console.log("Vigor Restaurado em " + i);
}

console.log("Total de vigor restaurado: " + stamina);

//bosses
let bosses = "Boss Ballas";

switch (bosses) {
  case "Boss Ballas":
    console.log("Você matou Ballas, +1500XP");

  case "Boss Eidolon":
    console.log("Você matou o Boss Eidolon, +2500XP");
}

//XP Alert

let xpLvl = 0;

for (let i = 1; i <= 4170; i++) {
  xpLvl += 1;
  console.log("Xp: " + i);
}

console.log("Você ganhou um total de: " + xpLvl);

if (xpLvl === 1000) {
  console.log("Título de " + nickname + " agora é Bronze");
} else if (xpLvl === 4170) {
  console.log("Título de " + nickname + " agora é Prata");
} else {
  console.log("Título de " + nickname + " agora é Ouro");
}
