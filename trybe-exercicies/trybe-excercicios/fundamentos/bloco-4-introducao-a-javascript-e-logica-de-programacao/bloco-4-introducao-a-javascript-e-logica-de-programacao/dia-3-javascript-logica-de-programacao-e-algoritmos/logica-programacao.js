//========================================================================================================

// 1 Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

function calcFactorial(num) {

  const result = null;

  if (num === 0 || num === 1) { // se o numero for 0 ou 1 retorna 1
    return 1;
  }
  for (let i = num - 1; i >= 1; i--) { // este laço o dizemos que o indice  é num -1, e enquanto for maior ou igual a 1 fazemos o decrecimo do index
    num *= i // aqui dizemos que o numero atual é a multiplicação de i que seria o numero anterior( -1)
  };

  return num;
}

// console.log(calcFactorial(10));
// console.log(calcFactorial(4));

//========================================================================================================

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.


// let word = 'tryber';

const reverseString = (str) => str.split('').reverse().join(''); // .split para transformar a string em um array/ .reverse para inverter os valores/.join para juntar tudo em uma string novamente ('detalhe que se nao colocarmos os parenteses e aspas ele converte em um array invertido')



// console.log(reverseString(word));
// console.log(reverseString('Roberto, Baez'))

//========================================================================================================
// 3- Considere o array de strings abaixo:
// Copiar

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let arrayOfNames = ['java', 'javascript', 'python', 'html', 'css'];



// console.log(arrayOfNames[2].length)

 const findBiggestIndex = arrayOfNames.reduce((word, current) => word > current.length ? word : current.length, 0);

const result = arrayOfNames.filter( word => word.length == findBiggestIndex);

// console.log(result);

function findBiggestWord(arr) {


    let iLength = 0;
    const biggestWord = [];

    for (let i = 0; i < arr.length; i+=1) {
      if(iLength < arr[i].length){
        iLength = arr[i].length;
      }      
    }
    for (let j = 0; j < arr.length; j+=1) {
      if(arr[j].length == iLength)
      biggestWord.push(arr[j])
    }

 return biggestWord;
}



//========================================================================================================
// console.log(findBiggestWord(arrayOfNames));


const findSmallerIndex = arrayOfNames.reduce((word, current) =>  word.length > current  ?  word : current,0);
const filterSmallerWord = arrayOfNames.filter( word => word == findSmallerIndex);

console.log(filterSmallerWord);

function findSmallerWord (arr){


let indexLength = null;
const smallWord = [];

for (let i = 0; i < arr.length; i+=1){
  if( arr[i].length -1 < arr[i].length){
    indexLength = arr[i].length
    console.log(indexLength)
  }
}
for (let j = 0; j < arr.length; j+=1){
  if( arr[j].length == indexLength){
    smallWord.push(arr[j])
  }
}


return smallWord;

}

// console.log(findSmallerWord(arrayOfNames));