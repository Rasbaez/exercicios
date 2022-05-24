const body = document.body;


//   1 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;



let h1 = document.createElement('h1');

h1.className = 'titulo'
h1.innerText = 'Exercicio 5.2'
body.appendChild(h1);



// 2 🚀 Adicione a tag main com a classe main-content como filho da tag body;


let main = document.createElement('main');

main.classList.add('main-content');

body.appendChild(main);


// 3🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;


let section = document.createElement('section')
main.appendChild(section);
section.style.backgroundColor = 'green'

console.log(section);


// 4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let p = document.createElement('p')

section.appendChild(p)
p.innerText = 'MAKE BELIVE, IT IS POSSIBLE!!!!'


// 5🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

section.classList.add('left-content')
main.appendChild(section)
main.removeChild(section);


// 6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

section.classList.add('right-content')
main.appendChild(section)
section.style.marginRight = 'auto'


// 7  Adicione uma imagem com src configurado para o valor  e classe small-image. Esse elemento deve ser filho do section criado no passo 5;


let img = document.createElement('img')
img.setAttribute('src', 'https://picsum.photos/200')
section.appendChild(img)


// 8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;


function listGerator(list) {


    const ul = document.createElement('ul') //criando o elemento ul

    for (let index = 0; index < list.length; index += 1) { // usando o laço para criar uma li dentro de UL 
        const element = list[index];
        const li = document.createElement('li')
        li.innerText = element // aqui adicionamos o texto dentro de cada elemento
        ul.appendChild(li) //criando o elemento LI dentro de

    }
    return section.appendChild(ul) //retornando como filho de section
}

listGerator(['Um', 'Dois', 'Três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'])



//  9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

// function elementGenerator(tag){
//     const element = document.createElement(tag)
//      element.innerText = 'h3'
//      element.classList.add('description')
//         return element;
//     }

//     console.log(main.appendChild(elementGenerator('h3')))
//     console.log(main.appendChild(elementGenerator('h3')))
//     console.log(main.appendChild(elementGenerator('h3')))



for (let index = 0; index < 3; index++) {
    let h3 = document.createElement('h3');
    h3.innerHTML = 'titulo'
    h3.style.color = 'black'
    main.appendChild(h3)
    main.removeChild(h3)
}

