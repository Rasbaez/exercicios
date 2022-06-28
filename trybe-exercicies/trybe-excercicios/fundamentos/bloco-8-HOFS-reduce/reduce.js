// Todos os exercícios devem ser realizados utilizando reduce, e se necessário outra HOF, a informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten(arr) {
  // escreva seu código aqui
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// console.log(flatten(arrays))

//==============================================================================================================================

// Para os exercícios 2, 3 e 4 considere o seguinte array:

const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//==============================================================================================================================

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames(books) {
  // escreva seu código aqui
  const str = books.reduce((acc, curr) => {
   return `${acc} ${curr.author.name},`;
  }, "");

  return str.trim()
}
// console.log(reduceNames(books));

//==============================================================================================================================

// 🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

function averageAge(books) {
  // escreva seu código aqui
  const allBooks = books.length;
  const sumAges = books.reduce((sum, book) => (
    sum + (book.releaseYear - book.author.birthYear)
  ),0);

  return sumAges /  allBooks 
}

// console.log(averageAge(books));


//==============================================================================================================================

// 🚀 4- Encontre o livro com o maior nome.


function longestNamedBook(books) {
  // escreva seu código aqui

  return books.reduce((biggestBook, currBook) =>{
    biggestBook.name.length > currBook.name.length ? biggestBook.name.length : currBook.name.length;
    return biggestBook;
  })
  
}

console.log(longestNamedBook(books))

//==============================================================================================================================

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arr) {
  // escreva seu código aqui
  const arrOfLetters = arr.join('').split('')
  const result = arrOfLetters.reduce((acc, current) => {
      if(current === 'a' || current === 'A') return acc + 1
      return acc;
  },0)
    return `A quantidade de letras (A's) é de : ${result} `
}

// console.log(containsA(names))

//==============================================================================================================================


// 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function sumAges(acc, grade)  {
  return acc + grade;
};

const calcAverage = (index) => {
  const sum  = grades[index].reduce(sumAges, 0)
  return sum / grades[index].length;
};

function studentAverage() {
  // escreva seu código aqui
  return students.reduce((acc, student, index) => {
    const objStudents = {
      name: student,
      average: calcAverage(index)
    };
    acc.push(objStudents);
    return acc; 
  }, [])
}

console.log(studentAverage())




 // const object = students.map((student, index) => ({
  //   name: student,
  //   average: (grades[index].reduce((acc, curr) => acc + curr, 0) / notes[index.length])
  // }))

// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];