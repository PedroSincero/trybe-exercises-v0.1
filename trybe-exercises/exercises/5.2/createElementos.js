let ingredienteItems = [
    '500g de feijão carioquinha cozido',
    '200g de toucinho',
    '1 concha de óleo',
    '1 cebola média picada',
    '4 dentes de alho',
    '5 ovos',
    '1 colher de sopa de sal com alho',
    'Cheiro verde a gosto',
    '200g de farinha de mandioca'
];

let ingredientList = document.querySelector('.ingredients-list');
// percorre o ingredientItens
for(let index = 0; index < ingredienteItems.length; index += 1) {
    let ingredient = ingredienteItems[index];
//cria 'li'
    let ingredientListItem = document.createElement('li');
    // adiciona uma 'li' e depois coloca o texto do array ingredient (innerText)
    ingredientListItem.innerText = ingredient;
    // cria um class=''
    ingredientListItem.className = 'ingredients-list-item';

// adiciona oq está dentro do array para dentro do 'li'
    ingredientList.appendChild(ingredientListItem);
}

let ingredientListItems = document.querySelectorAll('.ingredients-list-item');
// quero descobrir se dentro da string tem alguma palavra com toucinho
for(let index = 0; index < ingredientListItems.length; index += 1) {
    let element = ingredientListItems[index];
// se o meu elemento, o texto que estiver no meu elemento, inclui algum texto que contenha a palavra 'toucinho'.
    if( element.innerText.includes('toucinho')) {
// peço para a minha lista de ingredient, remova o seu filho, element.
        ingredientList.removeChild(element);
    }
}