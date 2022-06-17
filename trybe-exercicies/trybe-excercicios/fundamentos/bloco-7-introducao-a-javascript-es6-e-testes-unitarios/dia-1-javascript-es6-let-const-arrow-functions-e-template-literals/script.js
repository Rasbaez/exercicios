// 1 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.
// Copie o código abaixo.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {

  var ifScope = 'Não devo ser ultilizada forado meu escopo (if)'
  var elseScope = 'Não devo ser utilizada fora meu escopo (else)'

  return escopo === true ? ifScope = `ótimo, fui ultilizada no escopo ! ` : elseScope

};

console.log(testingScope(true));
console.log(testingScope(false));

//===============================================================================================================

// 2 🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const arrOrdenator = (array) => array.sort((a, b) => a - b); // esta função ordena qualquer array de numeros passado

arrOrdenator(oddsAndEvens)

//===============================================================================================================

// Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.


const calcFactorial = (number) => number === 0 || number === 1 ? 1 : number * calcFactorial(number - 1)

// console.log(calcFactorial(4));


//===============================================================================================================

// Crie uma função que receba uma frase e retorne a maior palavra.
// Exemplo:
// Copiar
//       longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'


const frase = 'Criando uma função para encontrar a maior palavra nesta frase, adicionando algumas palavras a mais somente para testes!'

const findBiggestWord = (str) => {
  let biggest = 0;
  let word = null;
  const arrOfStrings = str.split(' ');

  arrOfStrings.forEach(str => {
    if (biggest < str.length) {
      biggest = str.length;
      word = str;
    }

  })
  return word;
};

console.log(findBiggestWord(frase))

//==========================================================================================
// 🚀 Crie uma página com um contador de cliques
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.




// const body = document.querySelector('body');
// const showClicks = document.createElement('p');
// body.appendChild(showClicks);
// let clickCount = 0;
// const btn = document.querySelector('button');


// btn.addEventListener('click', () => {

//   clickCount+=1
//  clickCount === 1 ? showClicks.innerHTML = `Fui clicado: ${clickCount} vez!`
//                  :  showClicks.innerHTML = `Fui clicado: ${clickCount} vezes!` 
// });

//==========================================================================================
// 🚀 Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'
// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS

const removeX = (name) => {
  const frase = 'Tryber x aqui!';
  const replaceX = frase.replace('x', name);
  return replaceX;
};

removeX('Roberto');

  const habilities = () => {
   const skills = ['html', 'css', 'JavaScript'];

  return `${removeX('Roberto')}!! Minhas três principais habilidades são: ${skills.join(', ')}`

};

console.log(habilities())