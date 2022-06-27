const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//=======================================================================================================

// 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.

function authorBornIn1947(books) {
  // escreva aqui o seu código
  return books.find((book) =>  book.author.birthYear ===  1947)

}

// console.log(authorBornIn1947(books))

//=======================================================================================================

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

function smallerName(books) {
  let nameBook;
  // escreva aqui o seu código
   books.forEach((book) => {
    if(!nameBook || book.name.length < nameBook.length){
      nameBook = book.name
    }
   })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

// console.log(smallerName(books));

//=======================================================================================================

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.


function getNamedBook(books) {
  // escreva seu código aqui
  return books.find(book => book.name.length === 26);
}

// console.log(getNamedBook(books));


//=======================================================================================================

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(books) {
  // escreva aqui seu código
  return books.sort((a,b) => b.releaseYear - a.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc(books));


//=======================================================================================================

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

const expectedResult = false;

function everyoneWasBornOnSecXX(books) {
  // escreva seu código aqui
  return books.every(sec => sec.author.birthYear > 2000 );
}

// console.log(everyoneWasBornOnSecXX(books));


//=======================================================================================================

// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s(arr) {
  // escreva seu código aqui
  return arr.some(release => release.releaseYear >= 1980 && release.releaseYear <= 1990 );
}

console.log(someBookWasReleaseOnThe80s(books));

//=======================================================================================================

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function authorUnique(books) {
  // escreva seu código aqui
   const arrAges = books.map(age => age.author.birthYear);
   let count = 0;
     for(let i = 0; i < arrAges.length; i += 1){
         if(arrAges[i] === arrAges[i -1] ){
             count +=1
         }
     }
   return count  >= 1 ? true : false
}

authorUnique(books)
