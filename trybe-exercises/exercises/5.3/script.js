function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1:
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function createDays () {
    let getDaysList = document.getElementById('days');

    for(let index in dezDaysList) {
      let day = dezDaysList[index];
      let dayItem = document.createElement('li');
      //adiciona uma classe diferente nos dias X 
      if (day === 24 | day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }else if (day === 4 | day === 10 | day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }else if (day === 25) {
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }else {
      // essa parte de baixo adiciona os dias e coloca class
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
      };
    };
  };
createDays();


// Exercício 2:
function createHolidayButton(buttonName) {
  // seleciona o className;
  let buttonContainer = document.querySelector('.buttons-container');
  // cria o elemento <button></button>;
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';
  // cria elemento <button>buttonName</button> e adiciona o nome;
  newButton.innerHTML = buttonName;
  // adiciona a id no botão com nome 'btn-holiday';
  newButton.id = newButtonID;
  // seleciona o class ' buttons-container' e adiciona o Botão dentro da classe;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

//Exercicio 3;
function displayHolidays() {
  //seleciona o id btn-holiday
  let getHolidayButton = document.getElementById('btn-holiday');
  // seleciona a class holiday
  let getHolidays = document.getElementsByClassName('holiday');
  // cria variavel que tem um rgb dentro
  let backgroundColor = 'rgb(238,238,238)';
  // cria variavel que tem white dentro
  let setNewColor = 'white';
// n entendi essa parte
  getHolidayButton.addEventListener('click', function() {
    for (let index in getHolidays) {
      if(getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
}

displayHolidays();

