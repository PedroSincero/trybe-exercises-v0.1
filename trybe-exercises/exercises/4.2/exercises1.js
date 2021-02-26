//Exercises #1
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

//Exercises #2
//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let soma2 = 0;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers+= 1) {

// soma + soma + posição do numbers[0 = 5] e manda o resultado para o soma
  soma2 += numbers[indexNumbers];  
}

console.log(soma2);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let containValue = 0;

for (let indexValue = 0; indexValue < numbers.length; indexValue+= 1) {

  containValue += numbers[indexValue];
}

//console.log(containValue);
console.log(containValue / numbers.length)
let divisonValue = containValue / numbers.length;

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (divisonValue > 20 ) {
  console.log("valor maior que 20");
}else {
  console.log("valor menor ou igual a 20");
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = 0;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1){
  if (numbers[indexNumbers] > maiorNumero) {
    maiorNumero = numbers[indexNumbers]
  }
}
console.log(maiorNumero)

//Forma alternativa
let meuArray = [0,12,13,2,1273,28,1];
let maior = Math.max.apply(null, meuArray);

console.log(maior + " é o maior")