import React from "react";

import YouTube from "react-youtube";

class Home extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div class="card">
              <YouTube
                videoId="y-BFrPQPGjM"
                opts={opts}
                onReady={this._onReady}
              />
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
