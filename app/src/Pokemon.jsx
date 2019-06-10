import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  return (
    <>
      {
        props.pokemon.map(pokemon => (
          <div 
            key={pokemon.id} 
            className="pokemon" 
            onClick={() => props.getCurrentPokemon(pokemon.id)}
          >
            <img src={pokemon.img} alt={pokemon.name} />
            <div>
              <h3>{pokemon.name}</h3>
            </div>
          </div>
        ))
      }
    </>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      type: PropTypes.arrayOf(
        PropTypes.oneOf([
          'Grass',
          'Poison',
          'Fire',
          'Flying',
          'Water',
          'Bug',
          'Normal',
          'Electric',
          'Psychic',
          'Ground',
          'Fighting',
          'Rock',
          'Ice',
          'Ghost',
          'Dragon'
        ])
      )
    }).isRequired
  )
}

Pokemon.defaultProps = {
  pokemon: []
}

export default Pokemon;