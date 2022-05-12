//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:



const sum = (a, b) => a + b;
// console.log(sum(10,20));


const subtraction = (a, b) => a - b;
// console.log(subtraction(50, 10));

const multiply = (a, b) => a * b;
// console.log(multiply(3, 30));

const divide = (a, b) => a / b;
// console.log(divide(50, 10));

const rest = (a, b) => a % b;
// console.log(rest(10,5));


// ------------------------------------------------------------------------------------------------------------------------------------------------

//2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

//  COM HOF

// const numero1 = 894511;
// const numero2 = 8945;

const biggestNumber = (num1, num2) => num1 > num2 ? num1 : num2;
// console.log(biggestNumber(numero1, numero2))


// jeito clássico eu diria!

function biggestNumber2(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else if (num1 && num2 !== typeof 'number') {
        return 'Digite somente números'
    }

}
// console.log(biggestNumber2(numero1, numero2));
// console.log(biggestNumber2(10, 'três'));


// ------------------------------------------------------------------------------------------------------------------------------------------------

// 3 Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados


const numero1 = 8674231894;
const numero2 = 8674234;
const numero3 = 787788745187;


const biggestOfThreeNumbers =   ((num1, num2, num3) => Math.max(num1, num2, num3));
 
function biggestOf3Numbers(num1, num2, num3) {

    const result = Math.max(num1, num2, num3); 
    return  result !== typeof 'number' ? 'caractere inválido, digite apenas números!!' : result;
}

console.log(biggestOfThreeNumbers(numero1, numero2, numero3));
console.log(biggestOf3Numbers(numero1, numero2, numero3));
console.log(biggestOf3Numbers(numero1, numero2, 'numero3'));
