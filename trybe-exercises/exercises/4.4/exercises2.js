//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function ifIsPalindrome (text) {
  if (text === "palindrome") {
    return true;
  }else{
    return false;
  }
}
console.log(ifIsPalindrome('palindrome'))

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//let values = [2,3,6,7,10,1];


function maiorValor(numeros) {
  let maior = 0;
    for(let indice in numeros){
      if (numeros[maior] < numeros[indice]) {
        maior = indice;
      }
    }
    return maior;
}
console.log(maiorValor([2,12,6,7,10,1]));

