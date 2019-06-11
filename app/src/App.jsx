import React, { Component } from 'react';
import data from './data';
import Pokemon from './Pokemon';
import PokemonDetail from './PokemonDetail';

class App extends Component {
  constructor() {
    console.log('Constructing...');
    super();
    this.state = {
      pokemon: [],
      currentPokemon: null,
      test: ''
    };
  }

  componentDidMount() {
    console.log('Component Mounted!');

    // fetch the data first here
    // set the data to state
    setTimeout(() => {
      this.setState({ pokemon: data });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Updated!');
    console.log(prevState.pokemon, this.state.pokemon);

    this.setState({ test: 'something' });
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
    console.log('rendering...');
    return (
      <div className="App">
        <PokemonDetail 
          current={this.state.currentPokemon}
          clearCurrentPokemon={this.clearCurrentPokemon}
        />
        <Pokemon 
          pokemon={this.state.pokemon}
          getCurrentPokemon={this.getCurrentPokemon}
        />
      </div>
    );
  }
}

export default App;
