import { Component } from "react";
import React from "react";

class Header extends Component {
  render() {
    // const fullName = (name, lastName) => `${name} ${lastName}`;
    // const showName = fullName("Roberto", "Baez");
    const myTasks = [
      "Aprender react",
      "Aprender a renderizar Components",
      "Aprender a Sintaxe Correta do JSX",
    ];
    const showTasks = myTasks.map((task, idnex) => <li key={idnex}>{task}</li>);

    return (
      <div >
        <h1  className="title">Conteúdos de Front-End</h1>
      </div>
    );
  }
}

export default Header;
