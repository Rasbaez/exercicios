// const fetch = require('node-fetch')

// const getcoins = async () => {
// const url = 'https://api.coincap.io/v2/assets';

// const coins = await fetch( url )
//  .then((response) => response.json())
//  .then((data) => data.data)
//  .catch((error) => error.toString());

// return coins;
// }

const getCoins = async () => {
  try {
    const require = await fetch("https://ap.coincap.io/v2/assets");
    const response = await require.json();
    return response;
  } catch (error) {
    console.log(`Ohh Não parece que vc não conseguiu os dados ${error}`);
  }
};

const setCoins = async () => {
  const coins = await getCoins();
  const coinsList = document.getElementById("coins-list");

  coins.data
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement("li");

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();
