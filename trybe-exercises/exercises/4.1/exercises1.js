let a = 5;
let b = 10;
let c = 15;

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

//Adição
console.log(a+b);

//Subtração
console.log(a-b);

//Multiplicação
console.log(a*b);

//Divisão
console.log(b/a);
//Módulo
console.log(a%b);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

if (a > b) {
  console.log( "'A' é maior que 'B'" );
}else{
console.log( " 'A' é menor que 'B'" );
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

if (a > b && a > c) {
  console.log(" 'A' é o maior Numero");
}else if (b > a && b > c){
  console.log("'B' é o maior Numero");
}else {
  console.log(" 'C' é o maior Numero")
}

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let value = 0;

if(value > 0){
  console.log("Positivo");
}else {
  console.log("Negativo");
}

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
let y = 60;
let z = 80;
let x = 40;

if (y + z + x === 180) {
  console.log(true)
}else {
  console.log(false)
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .

//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

//Exemplo: bishop -> diagonals

let rei = "BAIXO";
let reiLowerCase = rei.toLowerCase()

switch (reiLowerCase) {
  case "cima":
    console.log("REI MOVE d5 PARA d6 ".toUpperCase);
    break;
  case "baixo":
    console.log("rei move d5 para d4");
    break;
  case "direita":
    console.log("rei move d5 para c5");
    break;
  case "esquerda":
    console.log("rei move d5 para e5");
    break;
  default:
    console.log("comando desconhecido");
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:


//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

//versão 1
let nota = 100;

if(nota >= 90){
  console.log("A");
  break;
}else if(nota >= 80){
  console.log("B");
  break;
}else if(nota >= 70){
  console.log("C");
  break;
}else if(nota >= 60){
  console.log("D");
  break;
}else if(nota >= 50){
  console.log("E");
  break;
}else if(nota < 40){
  console.log("F");
  break;
}else {
  console.log("nota não encontrada");
  break;
}

//versão2
let nota2 = 50;

switch (true) {
  case (nota2>=90 && nota2<=100):
    console.log("Nota A");
    break;
  case (nota2>= 80 && nota2<=100):
    console.log("Nota B");
    break;
  case (nota2>= 70 && nota2<=100):
    console.log("Nota C");
    break;
  case (nota2>= 60 && nota2<=100):
    console.log("Nota D");
    break;
  case (nota2>= 50 && nota2<=100):
    console.log("Nota E");
    break;
  case (nota2<50 ):
    console.log("Nota F");
    break;
  default:
    console.log("Nota Não encontrada")
} 
//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if .

let numeroPar1 = 1;
let numeroPar2 = 2;
let numeroPar3 = 3;

if(((numeroPar1 + numeroPar1 + numeroPar3) % 2) == 0) {
  console.log(true);
}else {
  console.log(false);
}
//Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let numeroImpar1 = 3;
let numeroImpar2 = 5;
let numeroImpar3 = 1;

if(((numeroImpar1 + numeroImpar2 + numeroImpar3) % 2) == 1) {
  console.log(true);
}else {
  console.log(false);
}

//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

//Atente que, sobre o custo do produto, incide um imposto de 20%.

//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

//valorCustoTotal = valorCusto + impostoSobreOCusto
//lucro = valorVenda - valorCustoTotal (lucro de um produto)
let valorProduto = -1;
let valorVenda = -1;

if (valorProduto >= 0 && valorVenda >=0) {
  let valorLucro = valorProduto *1.2;
  let lucroTotal = (valorVenda - valorLucro) * 1000;
  console.log(lucroTotal);
}else {
  console.log("Erro, Valor negativo")
}
