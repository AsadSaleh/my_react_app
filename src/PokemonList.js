import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((res) => {
      setPokemons(res.results);
    });
  }, []);

  return (
    <div>
      <h1>List Pokemon</h1>
      {pokemons.map((pokemon) => (
        <PokemonDetail name={pokemon.name} />
      ))}
    </div>
  );
}

function PokemonDetail(props) {
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    getPokemonInfo(props.name).then((res) => {
      setPokemon(res);
    });
  }, [props.name]);

  if (pokemon) {
    return (
      <div>
        <h4>Pokemon Name: {props.name}</h4>
        <img src={pokemon.imageUrl} alt={props.name} />
      </div>
    );
  }

  return <div>Loading...</div>;
}

// ==================================================
// Utilitiy functions
// ==================================================

async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data;
}

async function getPokemonInfo(pokemonName) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const data = await response.json();

  const pokemonInfo = {
    name: data.name,
    imageUrl: data.sprites.front_default,
  };

  return pokemonInfo;
}
