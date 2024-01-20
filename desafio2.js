let nickname = "Thorn";
let victoryNdefeat = soma(450, 382);

function soma(vNum, dNum) {
  let rank = vNum - dNum;
  return rank;
}

console.log("Seu total de Vitória é: " + victoryNdefeat);

if (victoryNdefeat === 10) {
  console.log("A sua classificção é Bronze");
} else if (victoryNdefeat === 18) {
  console.log("A sua classificção é Prata");
} else if (victoryNdefeat === 22) {
  console.log("A sua classificção é Ouro");
} else if (victoryNdefeat === 68) {
  console.log("A sua classificção é Diamante");
} else if (victoryNdefeat === 82) {
  console.log("A sua classificção é Lendário");
} else if (victoryNdefeat === 98) {
  console.log("A sua classificção é imortal");
} else {
  console.log("Ainda você não tem uma Classificção");
}

console.log("O herói " + nickname + " está na classficação de: Diamante");
