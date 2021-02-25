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

let rei = "baixo";

switch (rei) {
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

