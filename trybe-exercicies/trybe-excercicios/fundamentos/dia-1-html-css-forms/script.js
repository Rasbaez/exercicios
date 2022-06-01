const btn = document.querySelector('#btn-submit') // selecionando o botão
const userEmail = document.querySelector('#email').value
const inputUserName = document.querySelector('input[name="nome"]').value // selecionando o valor do input
const userMusic = document.querySelector('input[name="musica"]').value;
const showUserName = document.querySelector('#userName') // mostrando o nome em P





function showName(event) {
    event.preventDefault()
    // showUserName.innerHTML = inputUserName.value;

    alert(`Nome: ${inputUserName}  `)

}

btn.addEventListener('click', showName);