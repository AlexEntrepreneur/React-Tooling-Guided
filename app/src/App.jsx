import React, { Component } from 'react';
import data from './data';
import Pokemon from './Pokemon';
import PokemonDetail from './PokemonDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      currentPokemon: null
    };
  }

  getCurrentPokemon = id => {
    const current = this.state.pokemon.filter(el => el.id === id)[0];
    
    this.setState({
      currentPokemon: current
    });
  }

  clearCurrentPokemon = () => {
    this.setState({
      currentPokemon: null
    });
  }

  render() {
    return (
      <div className="App">
        <PokemonDetail 
          current={this.state.currentPokemon}
          clearCurrentPokemon={this.clearCurrentPokemon}
        />
        <Pokemon 
         
          getCurrentPokemon={this.getCurrentPokemon}
        />
      </div>
    );
  }
}

export default App;
