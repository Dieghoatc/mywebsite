import React, { Component } from "react";

import "./SimonDice.css";

function Button(props) {
  return (
    <button
      id="btnEmpezar"
      className="btn-start btn btn-success"
      onClick={props.onClick}
    >
      Empezar a jugar!
    </button>
  );
}

class SimonDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      ultimoLevel: 10,
      colors: {
        celeste: "color celeste left",
        violeta: "color violeta right",
        naranja: "color naranja left",
        verde: "color verde rigth"
      },
      viewButton: true,
      secuencia: []
    };
  }

  handleClick = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });

    this.setState({
      viewButton: false
    });
    this.secuencia();
  };

  secuencia = () => {
    //fil => llena automaticamente el vector Array con 10 numeros indicados previamente
    //map =>  crea un nuevo Array con las condiciones indicadas
    //Math.ramdon() => Genera valores aleaorios, al multiplicarlo * 4
    //=>  indica que va a genear valores ente 0 y 4,decimales
    //Math.floor => redondea hacia abajo los numeros decimales
    //n tiene un valor de 0, que fue undicado en un array de ceros con el metodo fill
    var genSecuencia;
    this.genSecuencia = new Array(10)
      .fill(0)
      .map(x => Math.floor(Math.random() * 4));
    console.log(`esteo es la generacion ${this.genSecuencia} `);
    this.setState({
      viewButton: false,
      secuencia: genSecuencia
    });
    this.nextLevel();
  };

  nextLevel = () => {
    this.subNivel = 0;
    this.iluminarSecuencia();
    this.agregarEventosClik();
  };
  transforNumtoColor = num => {
    switch (num) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
      default:
        break;
    }
  };
  iluminarSecuencia = () => {
    for (let i = 0; i < this.state.level; i++) {
      const color = this.transforNumtoColor(this.genSecuencia[i]);
      console.log(`este es el ciclo for ${color}`);
      setTimeout(() => this.iluminarColor(color), 1000 * i);
    }
  };
  iluminarColor(color) {
    switch (color) {
      case "celeste":
        this.setState({
          colors: {
            celeste: "color celestelight left",
            violeta: "color violeta right",
            naranja: "color naranja left",
            verde: "color verde right"
          }
        });
        break;
      case "violeta":
        this.setState({
          colors: {
            celeste: "color celeste left",
            violeta: "color violetalight right",
            naranja: "color naranja left",
            verde: "color verde right"
          }
        });
        break;
      case "naranja":
        this.setState({
          colors: {
            celeste: "color celeste left",
            violeta: "color violeta right",
            naranja: "color naranjalight left",
            verde: "color verde right"
          }
        });
        break;
      case "verde":
        this.setState({
          colors: {
            celeste: "color celeste left",
            violeta: "color violeta right",
            naranja: "color naranja left",
            verde: "color verdelight right"
          }
        });
        break;
      default:
        break;
    }
    setTimeout(() => this.apagarColor(), 350);
  }

  apagarColor() {
    this.setState({
      colors: {
        celeste: "color celeste left",
        violeta: "color violeta right",
        naranja: "color naranja left",
        verde: "color verde right"
      }
    });
  }
  agregarEventosClik() {}

  handleClickCol = e => {
    const nombreColor = e.target.dataset.color;
    const numeroColor = this.transformColtoNum(nombreColor);
    this.iluminarColor(nombreColor);
    console.log(nombreColor);
    if (numeroColor === this.secuencia[this.subNivel]) {
      this.subNivel++;
      if (this.subNivel === this.state.level) {
        this.setState({
          level: +1
          //eliminar eventos click
        });
        if (this.state.level === this.state.ultimoLevel + 1) {
          //gano
        } else {
          this.nextLevel();
        }
      } else {
        //perdio
      }
    }
  };
  transformColtoNum = col => {
    switch (col) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
      default:
        break;
    }
  };

  render() {
    let vButton;
    if (this.state.viewButton) {
      vButton = <Button onClick={this.handleClick}></Button>;
    }
    return (
      <div className="container">
        <div className="row m-3">
          <div className="col-12 gamebody ">
            <div className="gameboard ">
              <div
                id="celeste"
                className={this.state.colors.celeste}
                onClick={this.handleClickCol}
                data-color="celeste"
              ></div>
              <div
                id="violeta"
                className={this.state.colors.violeta}
                onClick={this.handleClickCol}
                data-color="violeta"
              ></div>
              <div
                id="naranja"
                className={this.state.colors.naranja}
                onClick={this.handleClickCol}
                data-color="naranja"
              ></div>
              <div
                id="verde"
                className={this.state.colors.verde}
                onClick={this.handleClickCol}
                data-color="verde"
              ></div>
              {vButton}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimonDice;
