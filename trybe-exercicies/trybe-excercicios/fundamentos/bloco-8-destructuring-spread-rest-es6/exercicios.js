// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.
// Dica: use spread operator.

//================================================================================================================//

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   rectangleArea(...rectangles) // altere a chamada da funcao rectangleArea
//   console.log(rectangle[0] * rectangle[1]);
// });

//================================================================================================================//

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

// console.log(sum(50000, 400000,66,88778,841329871));

//================================================================================================================//

// 3 - Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
// Dica: use object destructuring.


const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => ( //passamos como parâmetros o destructuring e acesamos os respectivos objetos, na chamada da função
  `${name} is ${age} years old and likes ${likes.join(', ')}.`
);

// console.log(personLikes(alex)); 
// console.log(personLikes(gunnar));

//================================================================================================================//


// 🚀 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring.

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filtringPeople = (arr) => 
  arr.filter(({nationality, bornIn}) => // aqui colocamos o destructuring dentro dos parâmetros do filter!!!
  nationality === 'Australian' && bornIn > 1990 && bornIn < 2000
  ) 


console.log(filtringPeople(people));

//================================================================================================================//

// 5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só

const myList = [1, 2, 3];

const swap = ([primeiro, segundo, terceiro]) => [terceiro, segundo, primeiro]

console.log(swap(myList))
