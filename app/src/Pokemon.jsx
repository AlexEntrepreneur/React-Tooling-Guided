import React from 'react';

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

export default Pokemon;