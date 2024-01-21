//info class
console.log("---------------Info-----------------");

let classes = ["Mago", "Monge", "Guerreiro", "Ninja"];
let charName = "Solid";
let age = 26;
let infoclass = charName + ", um " + classes[0] + " de " + age + " anos ";

console.log(infoclass);

console.log("---------------Armas-----------------");
//Armas

let weapons = 1;

if (weapons === 1) {
  console.log("Você escolheu: Cajado");
} else if (weapons === 2) {
  console.log("Você escolheu: Espada mágica");
} else {
  console.log("Nada");
}

let weapower = "Magia";
console.log("----------------Nível-----------------");

//Nível

let needLvl = 35;
let charLvl = 38;
let haveLvl = charLvl >= needLvl;

console.log(
  "o " + classes[0] + " tem o Nível necessário para usar o cajado? " + haveLvl
);
console.log(charName + " conseguiu utilizar o cajado");

console.log("----------------Lutas-----------------");

//Atacar

let attack = true;
let attackInfo = "";

if (attack) {
  attackInfo = classes[0] + " atacou usando " + weapower;
} else {
  console.log(`${classes[0]} Está defendendo`);
}

console.log(attackInfo);

console.log("----------------Inventário-----------------");

//Inventário

inventario = {
  armas: {
    0: ["Cajado", "Magia"],
    1: ["Poção de Veneno", 8],
    3: ["Bombinha de Fogo", 10],
  },
  alimentos: {
    0: ["Frutas silvestres", 15],
    1: ["Suco de fruta silvestres", 8],
    3: ["Carne Assada", 2],
  },
  pocoes: {
    0: ["Poção de Cura", 5],
    1: ["Poção de Estamina", 3],
    3: ["Pocão de Força", 1],
  },
};

abirInventario(inventario);

function abirInventario(inventario) {
  console.log("-------Armas--------");
  for (let index in inventario.armas) {
    let [nomeDaArma, quantidade] = inventario.armas[index];
    console.log(`- ${nomeDaArma}: - ${quantidade}`);
  }

  console.log("-------Alimentos--------");
  for (let index in inventario.alimentos) {
    let [nomeDoAlimento, quantidade] = inventario.alimentos[index];
    console.log(`- ${nomeDoAlimento}: - ${quantidade}`);
  }
  console.log("-------Poções--------");
  for (let index in inventario.pocoes) {
    let [nomeDapocao, quantidade] = inventario.pocoes[index];
    console.log(`- ${nomeDapocao}: - ${quantidade}`);
  }
}

console.log("---------------Forja----------------");

//Forjar Armas

class forjarArmas {
  constructor(material, tipoDeArma) {
    this.material = material;
    this.tipoDeArma = tipoDeArma;
  }
  escrever() {
    console.log(`Uma Espada magica do Luar, feito com: ${this.material}`);
  }
}

let criarArma = new forjarArmas("Ferro e fragmentos magicos", "Espada");

criarArma.escrever();
