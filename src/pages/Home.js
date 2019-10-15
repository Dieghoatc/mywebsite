import React from "react"

import './styles/Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mt-3">
            <div className="card">
              <img className = "c-image rounded mx-auto d-block mt-2" src="https://i.ibb.co/N34BMnd/Simon-Dice.png" alt="Simon-Dice"/>
              <div className="card-body">
                <h5 className="card-title">Juego Simon Dice</h5>
                <p className="card-text">
                Es un juego que consiste en siguir el patrón de colores para entrenar tu memoria, haciendo clic en los botones en el orden correcto.
                </p>
                <p>Curso de Platzi, Fundamentos de JavaScript</p>
                <a href="https://github.com/Dieghoatc/Juego-Simon-Dice" className="btn btn-primary">
                  Código
                </a>
                <span className="badge badge-warning m-3">JavaScrip</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6"></div>
        </div>
      </div>
    );
  }
}
export default Home;
