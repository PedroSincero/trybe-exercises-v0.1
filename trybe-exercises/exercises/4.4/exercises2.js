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

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(numeros) {
  let menor = 0;
    for(let indice in numeros) {
      if(numeros[menor] > numeros[indice]) {
        menor = indice;
      }
    }
    return  menor;
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


function maiorPalavra(palavras) {
  //criação de variavel que recebe 'palavras', iremos utilizar ela para comparar maior palavra com palavra
  let maiorPalavra = palavras;
  //for in fará um laço de repetição aonde passará por cada indice do array palavras
  for (let indice in palavras) {
  //maiorPalavra.
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'FernandaA', 'Joana'])); //Fernanda

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
  // variaveis de armazenamento 
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  let teste = 0;
  // primeiro laço de repetição, pegará um numero e utilizará ele para comparar com o outro laço de reptição 
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    //segundo laço de repetição, irá contar quantas vezes o numero é repetido
    for (let index2 in numeros) {
      // caso haja uma repetição, o numero será armazenado em 'contNumero'
      
      if (verificaNumero === numeros[index2]) {
        contNumero++;
      }
    }
    //pegando o resultado de quantas vezes o numero é repetido então é feito uma comparação com a repetição anterior (contamos na primeira vez que houve repetição do 2 três vezes, e na segunda repetição contamos que houve repetição do 3 duas vezes, então o 2 ainda permanece maior numero repetido e continuará armazenado em indexNumeroRepetido)
    if (contNumero > contRepetido) {
      // se a contagem do numero for maior que a contagem repetida, pegue o resultado do repetido e coloque em contagem do numero, depois pegue o resultado do index e coloque em numero repetido
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    // é zerado para fazer a contagem de um novo numero
    contNumero = 0;
  }
  
  return indexNumeroRepetido;
}

console.log(maisRepetido([2, 3, 2, 2, 2, 2, 3]));

//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaTodosNumeros(numeros) {
  let total = 0;
  // laço de repetição,
  for (let index = 1; index <= numeros; index++) {
    //adicione ao total, o resultado dele mesmo mais o resultado do index (ex: 0+1, 1+2, 2+3)
    total = total + index;
  }
  return total;
}
console.log(somaTodosNumeros(2)); //15

//Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split("");
  fimPalavra = fimPalavra.split("");
  controle = true;
  for (let i = 0; i < fimPalavra.length; i++) {
    if (palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
      controle = false;
    }
  }
  return controle;
}

console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan")); 
// /*  */