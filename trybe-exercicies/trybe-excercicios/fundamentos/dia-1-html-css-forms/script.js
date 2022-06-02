const btn = document.querySelector('#btn-submit') // selecionando o botão

const inputUserName = document.querySelector('#nome')// selecionando o valor do input
const userMusic = document.querySelector('input[name="musica"]').value// selecionando o valor
const showUserName = document.querySelector('#userName') // mostrando o nome em P
const userEmail = document.querySelector('#email')




function showAlert(event) {
     event.preventDefault()
    // showUserName.innerHTML = inputUserName.value;
        return alert(`Nome: ${inputUserName.value} \nEstilo Favorito: ${userMusic} \nEmail: ${userEmail.value}`)
   
}

btn.addEventListener('click', showAlert);