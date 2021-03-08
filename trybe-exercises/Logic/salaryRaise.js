// 0 - 400.00        15% (igual a 0.15)
// 400.01 - 800.00   12% ( igual a 0.12)   
// 800.01 - 1200.00  10% ( igual a 0.10)
// 1200.01 - 2000.00  7% (igual a 0.7)
// Acima de 2000.00   4% (igual a 0.4)

let salaries = [400.00, 800.01, 2000.00, 350.00, 455.00, 70.00, 3000.00];

// Como gerar um array com os salários aplicando  o aumento ?
// O que se repete? Olhar um salário e fazer o cálculo de acordo com onde ele se encaixa na tabela.

let firstGroupPercentage = 0.15;
let secondGroupPercentage = 0.12;
let thirdGroupPercentage = 0.10;
let forthGroupPercentage = 0.07;
let fifthGroupPercentage = 0.04;

console.log(salaries);

for(let index = 0; index < salaries.length; index+=1) {
  let oldSalary = salaries[index];

  // fazer o calculo de acordo com onde o salario se encaixa na tabela
  // descobrir onde o salário se encaixa na tabela

  // IF o salario for maior  que 0 && o salario for menor que 400
  if(oldSalary > 0 && oldSalary < 400){
    
    salaries[index] = oldSalary * (1 + firstGroupPercentage);
  }else if(oldSalary > 400 && oldSalary < 800){
    salaries[index] = oldSalary * (1 + secondGroupPercentage);
  }else if(oldSalary > 800 && oldSalary < 1200){
    salaries[index] = oldSalary * (1 + thirdGroupPercentage);
  }else if(oldSalary > 1200 && oldSalary < 2000){
    salaries[index] = oldSalary * (1 + forthGroupPercentage);
  }else if(oldSalary > 2000 ){
    salaries[index] = oldSalary * (1 + secondGroupPercentage);
  }else {
    salaries[index] = 'Salario Invalido'
  }
}
console.log(salaries);