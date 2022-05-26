function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//  1 🚀 Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e  são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function mothDays() {


  const listDays = document.querySelector('#days') // aqui selecionamos a UL com o ID #days

  for (let index = 0; index < dezDays.length; index += 1) {
    let day = dezDays[index]
    let dayItem = document.createElement('li') // aqui estamos criando a tag li

    if (day === 4 || day === 31) {

      dayItem.className = 'day holiday'
      dayItem.innerHtml = day;
      listDays.appendChild(dayItem)
    }
    if (day === 4 || day === 11 || day === 18) {
      dayItem.innerHTML = day;
      dayItem.className = 'day friday'; // usamos className quando queremos atribuir mais de uma classe
    }
    if (day === 25) {
      dayItem.innerHTML = day;
      dayItem.className = 'friday holiday'
      listDays.appendChild(dayItem)
    } else {
      dayItem.innerHTML = day;
      listDays.appendChild(dayItem)
    }


  }

}

mothDays()


// 🚀 Exercício 2 Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".



function btnHoliday(nameButton) {

  let btnContainer = document.querySelector('.buttons-container'); // aqui estamos selecionando a div com a clase .butons-containe
  let newButton = document.createElement('button'); // criamos o elemento propriamente dito
  newButton.setAttribute('id', 'btn-holiday'); // atribuimos o id btn-holiday ao elemento
  newButton.innerHTML = nameButton // colocamos um nome ao botão usando nosso parâmetro com innerHTML

  btnContainer.appendChild(newButton); // botão como filho/filha da tag <div> com classe "buttons-container".

}

btnHoliday('Feriados')



// 🚀 Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function showHolidays() {

  let holidayBtn = document.querySelector('#btn-holiday');
  let holiDays = document.querySelectorAll('.holiday')
  let backgColor = 'rgb(238,238,238)'
  let newColor = 'white'

  holidayBtn.addEventListener('click', function () {


    for (let index = 0; index < holiDays.length; index += 1) {
      if (holiDays[index].style.backgroundColor === newColor) {
        holiDays[index].style.backgroundColor = backgColor

      } else {

        holiDays[index].style.backgroundColor = newColor;
      }

    }

  })

}

showHolidays();



// Exercício 4
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".


function fridayBtnGerator(btnName) {

  let fridayBtn = document.createElement('button');
  let btnContainer = document.querySelector('.buttons-container');


  btnContainer.appendChild(fridayBtn);
  fridayBtn.setAttribute('id', 'btn-friday')
  fridayBtn.innerHTML = btnName;


  return fridayBtn;


}

fridayBtnGerator('Sexta-feira')


// Exercício 5
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.


function showFridays(fridayArr) {


  let selectedBtnFriday = document.querySelector('#btn-friday')
  let fridays = document.querySelectorAll('.friday')
  let textFriday = 'Sextou o/'

  selectedBtnFriday.addEventListener('click', function () {

    for (let index = 0; index < fridays.length; index += 1) {
      const day = fridays[index];
      if (day.innerHTML !== textFriday) {
        day.innerHTML = textFriday;
      } else {
        day.innerHTML = fridayArr[index];

      }

    }
  })

}

let dezFridays = [4, 11, 18, 25];
showFridays(dezFridays)

// Exercício 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};


function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '10px';
  })
};

dayMouseOver();
dayMouseOut();

// Exercício 7
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".


function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto');


// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".


function colorTask(color) {

  let newTask = document.createElement('div');
  let tasksContainer = document.querySelector('.my-tasks');

  tasksContainer.appendChild(newTask);


  newTask.className = 'task';
  newTask.style.backgroundColor = color;

}
colorTask('blue')


// Exercício 9
// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.


function setTaskClass () {


  let taskSelected = document.getElementsByClassName('task selected');
  //taskSelected é referente a classe criada
  let myTasks = document.querySelector('.task');



  myTasks.addEventListener('click', function (event) {
      if(taskSelected.length === 0){
          event.target.className = 'task selected';
        }else{
          event.target.className = 'task'
        }
  })

}

setTaskClass ()

// Exercício 10
// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).


// function selectTask (){

//   const taskSelected = document.getElementsByClassName('task selected');//selecionando a task
//   const selectedDays = document.querySelector('#days');//selecionando os dias
//   const divTask = document.querySelector('.task');//selecionando a div com classe .task
//   const colorDiv = divTask.style.backgoundColor; //selecionando a cor atual da classe .task


//   selectedDays.addEventListener('click', function(e) {
//     const eventTargetColor = e.target.style.color;
//     if(taskSelected.length > 0 && eventTargetColor !== colorDiv ) {
//       const color = taskSelected[0].style.backgroundColor;
//       e.target.style.color = color
//     }if(eventTargetColor !== colorDiv && taskSelected.length !== 0){
//       e.target.style.color = 'rgb(119,119,119)';
//     }

//   })

// }
// selectTask ()


function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();