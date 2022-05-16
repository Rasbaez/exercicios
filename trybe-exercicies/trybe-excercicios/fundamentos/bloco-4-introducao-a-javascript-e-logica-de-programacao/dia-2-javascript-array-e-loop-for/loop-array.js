// Aprofunde seus conhecimentos
// 🚀 Se liga nesse foguete!
// Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
// Copiar



// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// const showArrvalues = numbers.forEach(value => console.log(value)); //solução com HOF


function showWIthFor(arr) {


    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i]);

    }

}
// showWIthFor(numbers);



//====================================================================================


// 2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;


const sumArr = numbers.reduce((acc, curr) => acc + curr, 0);


function sumWithfor(arr) {


    let total = 0;

    for (let i = 0; i < arr.length; i += 1) {

        total += arr[i];
    }
    return total;

}

// console.log(sumArr);

// console.log(sumWithfor(numbers))

//====================================================================================

// 3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.


// const calcAverage = numbers.reduce((acc, curr) => parseFloat(acc + curr, 0 / numbers.length));



function avarageCalculator(arr) {

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    let avarage = total / arr.length;
    return avarage;

}


// console.log(avarageCalculator(numbers));
// console.log(calcAverage)


//====================================================================================

// 4 -Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";



function avarageCalculator(arr) {

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    let avarage = total / arr.length;
    return  avarage > 20 ? 'valor maior que 20' : 'valor menor ou igual a 20';

}


// console.log(avarageCalculator(numbers))


//====================================================================================


// 5 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;



const findBiggestNum = (arr) => Math.max(...arr);

function findBiggestArrNumber(arr){

    let biggestNumber = 0;

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > biggestNumber){
            biggestNumber = arr[index];
        }
    }
    return biggestNumber;
}


// console.log(findBiggestNum(numbers));
// console.log(findBiggestArrNumber(numbers));



//====================================================================================

// 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

const howMuchOdds = numbers.filter(value => value % 2 === 1);



console.log(howMuchOdds)