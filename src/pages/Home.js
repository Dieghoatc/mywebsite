import React from "react";

import "./styles/Home.css";
import RickandMortyLogo from "../projects/images/RickandMorty/logo.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
   
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 mt-3">
            <div className="card cardHome">
              <Link to="/simondice">
                <img
                  className="rounded mx-auto d-block mt-2"
                  src="https://i.ibb.co/N34BMnd/Simon-Dice.png"
                  alt="Simon-Dice"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Juego Simon Dice</h5>
                <p className="card-text">
                  Es un juego que consiste en siguir el patrón de colores para
                  entrenar tu memoria, haciendo clic en los botones en el orden
                  correcto.
                </p>
                <p>Curso de Platzi, Fundamentos de JavaScript</p>
                <a
                  href="https://github.com/Dieghoatc/Juego-Simon-Dice"
                  className="btn btn-primary"
                >
                  Código
                </a>
                <span className="badge badge-warning m-2">JavaScript</span>
                <span className="badge badge-primary m-2">ReactJS</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <div className="card cardHome">
              <Link to="/RickandMorty">
                <img
                  className="rounded mx-auto d-block mt-2"
                  src={RickandMortyLogo}
                  alt="RickandMortyLogo"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Rick and Morty Api</h5>
                <p className="card-text">
                  The Rick and Morty API is an open API donde se aplica el
                  concepto Asincrono en JavasScript, con el metodo Fetch para
                  realizar una petición Get.
                </p>
                <p>Curso ReactJS de Platzi</p>
                <a
                  href="https://codesandbox.io/s/rick-y-morty-slq1d"
                  className="btn btn-primary"
                >
                  Código
                </a>
                <span className="badge badge-warning m-2">JavaScript</span>
                <span className="badge badge-primary m-2">ReactJS</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-3">
            <div className="card cardHome">
              <Link to="/">
                <img
                  className="rounded mx-auto d-block mt-2"
                  src="https://1.bp.blogspot.com/-lmF0shTwaJw/WoXziK22aGI/AAAAAAAAJZ8/K2US6Gb7jwkxAdyW57_pijHYXXbWAaiJgCLcBGAs/s1600/inem.jpg"
                  alt="Web Progressive App"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  Desarrollo PWA( Progressive Web APP)
                </h5>
                <p className="card-text">
                  Para elección de colegios en Bogotá con énfasis en capacidades
                  especiales, consultando bases de datos abiertos dev-socrata
                  del gobierno de Colombia.
                </p>
                <p>Proyecto de grado</p>
                <span className="badge badge-warning m-2">JavaScript</span>
                <span className="badge badge-primary m-2">ReactJS</span>
                <span className="badge badge-danger m-2">
                  Developing ................................... 40%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
