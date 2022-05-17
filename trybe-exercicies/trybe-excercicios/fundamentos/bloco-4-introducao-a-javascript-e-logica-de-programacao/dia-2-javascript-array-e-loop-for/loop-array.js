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
    return avarage > 20 ? 'valor maior que 20' : 'valor menor ou igual a 20';

}


// console.log(avarageCalculator(numbers))


//====================================================================================


// 5 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;



const findBiggestNum = (arr) => Math.max(...arr);

function findBiggestArrNumber(arr) {

    let biggestNumber = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > biggestNumber) {
            biggestNumber = arr[index];
        }
    }
    return biggestNumber;
}


// console.log(findBiggestNum(numbers));
// console.log(findBiggestArrNumber(numbers));



//====================================================================================

// 6 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// const howMuchOdds = numbers.filter(value =>  value % 2 == 1 ? console.log(value) : 'Nenhum Valor');

function findOddNumbers(arr) {


    let oddNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            oddNumbers.push(arr[i]);
        } else {
            'Nenhum Valor';
        }
    }

    return oddNumbers;
}


// console.log(findOddNumbers(numbers)) 


//====================================================================================

// 7 Utilizando for, descubra qual o menor valor contido no array e imprima-o;


const findSmallNumber = (arr) => Math.min(arr);

function findSmallerNumber(arr) {




    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < i - 1) {
            let smallNumber = arr[i]
            return `O menor valor do array é ${smallNumber}`
        }
    }
}


// console.log(findSmallerNumber(numbers));
// console.log(findSmallNumber(numbers));


//====================================================================================
// 8 Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// function arrGerator(size) {

//     let count = [];

//     for (let i = 0; i <= size; i++) {
//         count.push(i);
//     }

//     return count;
// }

// console.log(arrGerator(25));



//====================================================================================
// 9 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.


function arrGerator(size) {

    let arrNumbers = [];

    for (let i = 0; i <= size; i++) {
        arrNumbers.push(i);
    }

    return arrNumbers;

}

// console.log(arrGerator(25));


const divideArrBy2 = (arr) => arr.map(number => number / 2); // usando HOF



// console.log(divideArrBy2(arrGerator(25)))


function divideArr(arr) {

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(i / 2)
    }

    return result;
}

// console.log(divideArr(arrGerator(25)))



//==================================================================================== 
// BONUS

// ORDENANDO ARRAYS COM O METODO BUBBLE // 
// Ordene o array numbers em ordem crescente e imprima seus valores;







// Ordene o array numbers em ordem decrescente e imprima seus valores;

function ordenatorOfArrays(arr) {


    for (let index1 = 0; index1 < arr.length; index1++) {
        for (let index2 = 0; index2 < index1; index2++) {
            if (arr[index1] < arr[index2]) {
                let position = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = position;

            }

        }
    }
    return arr;

}

// console.log((ordenatorOfArrays(numbers)));

//2 Ordene o array numbers em ordem decrescente e imprima seus valores;

function descendingOrdenatorArr(arr) {

    for (let index1 = 0; index1 < arr.length; index1++) {
        for (let index2 = 0; index2 < index1; index2++) {
            if (arr[index1] > arr[index2]) {
                let position = arr[index2];
                arr[index2] = arr[index1];
                arr[index1] = position;
            }
        }


    }

    return arr;

}

// console.log(descendingOrdenatorArr(numbers));



// 3 Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:


function arrMultiplicator(arr) {


    let result = [];

    for (let i = 1; i <= arr.length; i++) {
        let multiplyIndex = arr[i] * arr[i -1]

        result.push( multiplyIndex );
    }
    return result;
}

console.log(arrMultiplicator(numbers));