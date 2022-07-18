import { Component } from "react";
import React from "react";

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: "High Order Functions",
        bloco: 8,
        status: "Aprendido",
      },
      {
        conteudo: "Composicao de Componentes",
        bloco: 11,
        status: "Aprendendo",
      },
      {
        conteudo: "Composicao de Estados",
        bloco: 12,
        status: "Aprenderei",
      },
      {
        conteudo: "Redux",
        bloco: 16,
        status: "Aprenderei",
      },
    ];

    const showcontents = conteudos.map((content, index) => {
      const { conteudo, bloco, status } = content;

      return <div key={index}>
                <h4>{`Ò Conteudo é: ${conteudo}`}</h4>
                <p>{`Status: ${status}`}</p>
                <p>{`Bloco: ${bloco}`}</p>        
            </div>;
    });

    return (
      <>
        <div>
          {showcontents}
        </div>
      </>
    );
  }
}

export default Content;
