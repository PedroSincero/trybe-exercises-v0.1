function encode(text) {
  let linha = text;
  for (let key in text) {
    if (text[key] === "a") {
      linha = linha.replace("a", 1);
    } else if (text[key] === "e") {
      linha = linha.replace("e", 2);
    } else if (text[key] === "i") {
      linha = linha.replace("i", 3);
    } else if (text[key] === "o") {
      linha = linha.replace("o", 4);
    } else if (text[key] === "u") {
      linha = linha.replace("u", 5);
    }
  }
  return linha;
}


function decode(text) {
  let linha = text;
  for (let key in text) {
    if (text[key] === "1") {
      linha = linha.replace("1", "a");
    } else if (text[key] === "2") {
      linha = linha.replace("2", "e");
    } else if (text[key] === "3") {
      linha = linha.replace("3", "i");
    } else if (text[key] === "4") {
      linha = linha.replace("4", "o");
    } else if (text[key] === "5") {
      linha = linha.replace("5", "u");
    }
  }
  return linha;
}

console.log(decode("b1b2b3b4b5"));



var linha_nova = "cabana";
var linha = linha_nova.replace("a", "1");
console.log(linha);


// Desafio 10
function techList(tech, name) {
  tech.sort();
  let tecnologias = [];

  for (let index in tech) {
    let bloco = {
      tech: tech[index],
      name: name,
    }
    tecnologias.push(bloco);
  }
  if (tech.length === 0) {
    return "Vazio!"
  }
  return tecnologias;
}

let r = /\d+/
let y = new RegExp()
console.table(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

// Desafio 11
function generatePhoneNumber(phone) {
  let limite = 11;
  let resultado = [];
  for (let index in phone) {
    if (phone.index > limite) {
      return "Array com tamanho incorreto.";
    } else if (phone[index] < 0 || phone[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
  // se algum numero ser menor que zero e maior que 9 ou repetir 3 vezs ou mais deve retornar " não é possivel gerar um numero de telefone com esses valores"

  // seu código aqui
}