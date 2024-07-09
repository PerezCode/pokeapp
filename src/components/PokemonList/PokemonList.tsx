import { useEffect, useState } from "react";
import { NamedAPIResource } from "pokenode-ts";
import PokemonCard from "../PokemonCard/Pokemoncard";
import "./PokemonList.css";

import { PokemonListProps as Props } from "./PokemonList.types.ts";
import { pokeAPI } from "../../config/pokenode.config";

const PokemonList: React.FC<Props> = () => {
  const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await pokeAPI.listPokemons(0, 151); // (offset, limit)
        setPokemonList(results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
        throw error;
      }
    })();
  }, []);

  return (
    <div className="pokemonList">
      {pokemonList.map((pokemon, index) => (
        <div key={`pokemon-${index}`}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
