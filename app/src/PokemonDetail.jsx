import React from 'react';

function PokemonDetail(props) {
  
  const onOverlayClick = (event) => {
    if (event.target.className === 'overlay') {
      clearCurrentPokemon();
    }
  }

  const { current: pokemon, clearCurrentPokemon } = props;

  return (
    <>
    {
      props.current &&
      (
        <div className="overlay" onClick={onOverlayClick}>
          <div className="modal">
            <div>
              <img src={pokemon.img} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              <p><b>Type:</b> { pokemon.type.map(el => `${el} `) }</p>
              <p><b>Height:</b> { pokemon.height }</p>
              <p><b>Weight:</b> { pokemon.weight }</p>
              {
                pokemon.next_evolution &&
                <p><b>Evolve To:</b> {pokemon.next_evolution.map(el => `${el.name} `)}</p>
              }
            </div>
          </div>
        </div>
      )
    }
    </>
  );
}

export default PokemonDetail;