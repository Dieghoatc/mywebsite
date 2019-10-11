import React from "react";
import Iframe from 'react-iframe'
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div class="card">
              <iframe
                className="text-center"
               
                height="480"
                src="https://www.youtube.com/embed/y-BFrPQPGjM"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div class="card-body">
                <h5 class="card-title">
                  Reik, J. Balvin, Lalo Ebratt - Indeciso
                </h5>
                <p class="card-text">
                  Siempre que ella baila así A mí me daña la cabeza El día que
                  la conocí Tomaba tequila y cerveza Y ahora yo me la paso
                  buscando Una razón pa’ verte bailando Me robó el corazón sin
                  permiso Su movimiento me tiene indeciso
                </p>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}
export default Home;
