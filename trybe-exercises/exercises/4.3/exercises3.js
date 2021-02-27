//Agora inverta o lado do triângulo.

let nLimite = 5;
let asteriscos = '*';
let linha = '';
let espaco = nLimite;


for(let espacoIndex = 0; espacoIndex < nLimite; espacoIndex += 1) {
  for(let asteriscoIndex = 0; asteriscoIndex <= nLimite; asteriscoIndex+= 1){
    if (asteriscoIndex < espaco) {
      linha = linha + ' ';
    } else {
      linha = linha + asteriscos;
    }
  }
  console.log(linha);
  linha = '';
  espaco -=1;
};


//gabarito
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};