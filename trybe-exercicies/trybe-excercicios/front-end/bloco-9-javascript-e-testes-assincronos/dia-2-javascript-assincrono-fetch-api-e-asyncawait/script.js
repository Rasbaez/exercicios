// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";



const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myOnject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  fetch(API_URL, myOnject)
  .then(response => response.json())
  .then(data =>  {
    document.getElementById('jokeContainer').innerText = data.joke
  })
  
};



window.onload = () => fetchJoke();
