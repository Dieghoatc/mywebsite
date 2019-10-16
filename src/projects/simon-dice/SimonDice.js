import React, { Component } from "react";

import './SimonDice.css'


class SimonDice extends Component {

  render() {
    return (
      <div className="container">
        <div className="row asdas">
          <div className="col-12 gameboard">            
              <div
                id="celeste"
                className="color celeste left"
                data-color="celeste"
              ></div>
              <div
                id="violeta"
                className="color violeta right"
                data-color="violeta"
              ></div>
              <div
                id="naranja"
                className="color naranja left"
                data-color="naranja"
              ></div>
              <div
                id="verde"
                className="color verde right"
                data-color="verde"
              ></div>
              <button
                id="btnEmpezar"
                className="btn-start"
                onclick="empezarJuego()"
              >
                Empezar a jugar!
              </button>
            </div>
          </div>
        </div>
      
    );
  }
}

export default SimonDice;
