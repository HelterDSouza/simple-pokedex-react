import React from "react";
import "./styles.css";
export default ({ pokemons }) => {
  return (
    <div className="pokemon">
      {pokemons.map((pokemon, id) => (
        <div key={id}>
          <a className="pokemonLink" href={pokemon.url}>
            {pokemon.name}
          </a>
        </div>
      ))}
    </div>
  );
};
