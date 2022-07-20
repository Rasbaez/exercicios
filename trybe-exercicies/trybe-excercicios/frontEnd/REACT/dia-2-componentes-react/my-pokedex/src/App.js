import "./App.css";
import React from "react";
import pokemons from "./data";
import Pokedex from "./Components/Pokedex";

class App extends React.Component {
  render() {
    return (
      <>
        
        <h1 className="title">𝙋𝙤𝙠𝙚𝙙𝙚𝙭</h1>
        <main className="container">
          <Pokedex pokemons={pokemons} />
        </main>
      </>
    );
  }
}

export default App;
