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





const biggestOfThreeNumbers = ((num1, num2, num3) => Math.max(num1, num2, num3));

function biggestOf3Numbers(num1, num2, num3) {

    const result = Math.max(num1, num2, num3);
    return result !== typeof 'number' ? 'caractere inválido, digite apenas números!!' : result;
}

// console.log(biggestOfThreeNumbers(numero1, numero2, numero3));
// console.log(biggestOf3Numbers(numero1, numero2, numero3));


// ------------------------------------------------------------------------------------------------------------------------------------------------
// 4 Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.


const value1 = 50;
const value2 = -50;

const verifyIsPositive = (num => num < 0 ? 'negative' : 'Positive');

// console.log(verifyIsPositive(value1));
// console.log(verifyIsPositive(value2));

// ------------------------------------------------------------------------------------------------------------------------------------------------



// 5 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Dados três segmentos de reta distintos, se a soma das medidas de dois deles é sempre maior que a medida do terceiro, então, eles podem formar um triângulo.

const cat1 = 16;
const cat2 = 30;
const hipotenusa = 30;


const verifyIfIsTriangle = ((num1, num2, num3) => num1 + num2 > num3 ? true : 'Erro! As medidas informadas não formam um triângulo');


// console.log(verifyIfIsTriangle(cat1,cat2,hipotenusa));


// ------------------------------------------------------------------------------------------------------------------------------------------------

// 6Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.


// let chessPeace = prompt('Digite o nome da peça de xadrez desejada, e informarei oque éla faz! :)')



// switch (chessPeace.toLowerCase()) {
//     case 'peão':
//         alert('O Peão anda apenas para frente apenas de casa em casa, e pode eliminar peças em ângulos diagonais apenas uma casa por vez!');
//         break;
//     case 'torre':
//         alert('A torre anda apenas nos ângulos horizontal e verifical, é possivel trocar de lugar com o rei caso a linha entre eles estiver vazia.');
//         break;
//     case 'cavalo':
//         alert('O Cavalo se mexe andando 3 casas na horizontal e uma vertical em forma de L, também pode pular sobre outras peças');
//         break;
//     case 'bispo':
//         alert('Obispo se movimenta apenas em ângulos diagonais em quantas casas desejar, para qualquer lado desde que seja diagonal.');
//     case 'rainha':
//         alert('A Rainha se movimenta para em qualquer direção e quantas casas desejar');
//     case 'rei':
//         alert('O Rei apenas se movimenta uma casa por vez, e pode eliminar peças em ualquer direção, e se for cercado é  \nCHEQUE MATE IRMÃO!!');
//         break;
//     default:
//         alert('Nome da peça inválido' )

//         break;
// }


// ------------------------------------------------------------------------------------------------------------------------------------------------

// 7 Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.



function percentConverter(nota) {


    const porcentagem = nota * 100


    if (porcentagem >= 90) {
        return 'Nota A'
    } else if (porcentagem >= 80) {
        return 'Nota B'
    } else if (porcentagem >= 70) {
        return 'Nota C'
    } else if (porcentagem >= 60) {
        return 'Nota D'
    } else if (porcentagem >= 50) {
        return 'Nota E'
    } else if (porcentagem < 50) {
        return 'Nota F'
    } else if (porcentagem === 0 && porcentagem > 100) {
        return 'ERRO a nota deve ser de 0 a 100%'
    }



}

// console.log(percentConverter(0.90))

// ------------------------------------------------------------------------------------------------------------------------------------------------

// 5 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.


const numero1 = 8;
const numero2 = 10;
const numero3 = 4;

const arrOfNumbers = [numero1, numero2, numero3]
const pairVerify = arrOfNumbers.some(pair => pair % 2 === 0); /*solução com HOF */



function verifyIsPair(num1, num2, num3) {

    if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
        return true;

    } else {

        return false;
    }


}


// console.log(verifyIsPair(numero1, numero2, numero3));
// console.log(pairVerify);


// ------------------------------------------------------------------------------------------------------------------------------------------------
//  6 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.


const verifyIfOdds = arrOfNumbers.some(odd => odd % 2 === 1  );


function verifyIsOdd(num1, num2, num3) {

    if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) {
        return true;

    } else {

        return false;
    }


};

// console.log(verifyIsOdd(numero1, numero2, numero3));
// console.log(verifyIfOdds);


// -----------------------------------------------------------------------------------------------------------------------------------------
// 10 -Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const valorCusto = 50.00
const impostoSobreOCusto = 20.0

const valorDeCustoTotal = valorCusto + impostoSobreOCusto
const valorVenda = 90.00

const lucro =  valorVenda - valorDeCustoTotal

const calcProfit = (profit) => profit * 1000;/* solução com HOFs */



console.log(calcProfit(lucro));


