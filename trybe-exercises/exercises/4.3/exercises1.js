//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let nAsteriscos = 5;
let asteriscos = "*";
let linha = "";
//acrescento asteriscos dentro da linha
for(let index = 0; index < nAsteriscos; index+=1) {
  linha = linha + asteriscos;
};
// pego o resultado de linha e faço repetições de console.log
for(let index = 0; index < nAsteriscos; index+=1) {
  console.log(linha)
}


