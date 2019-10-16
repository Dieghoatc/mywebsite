import React from "react";

import "./RickandMorty.css";

import logo from "../images/projects/RickandMorty/logo.png";

function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}

class RickandMorty extends React.Component {
  //4. Estado inicial del componente
  state = {
    loading: true,
    error: null,
    data: {
        info: {},
      results: []
    },
    nextPage: 1
  };

  //1.ComponentDidMount inicializacion del componente
  componentDidMount() {
    this.fetchCharacters();
  }

  //2.Funcion asincrona, no sabemos cuando llegan los datos
  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    //5.Manejando loe errores en la peticion
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();

      //3. para guardar los datos en el estado del componente
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        netxPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({
        loading: false, 
        error: error
      });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="RickandMorty" />
          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character}></CharacterCard>
              </li>
            ))}
          </ul>
          {this.state.loading && <p className="text-center">Loading...</p>}

          {!this.state.loading && this.state.data.info.next && (
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )}
        </div>
      </div>
    );
  }
}
export default RickandMorty;
