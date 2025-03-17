import React, { useState } from 'react';

const requestRandomPokemon = async () => {
  const response = await fetch('/api/methods.json');
  const responseJSON = await response.json();
  return responseJSON;
};

const GenPokemonReact = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const updatePokemonDisplay = async () => {
    setLoading(true);
    const pokemonData = await requestRandomPokemon();
    setData(pokemonData);
    setLoading(false);
  };

  const formatPokemonData = (pokemonData) => {
    return (
      <div>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>Type: {pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      </div>
    );
  };

  return (
    <section>
      <button onClick={updatePokemonDisplay}>Generate a new Pokemon!</button>
      <div id="pokemon-display">
        {loading ? <p>Loading...</p> : data ? formatPokemonData(data) : null}
      </div>
    </section>
  );
};

export default GenPokemonReact;

