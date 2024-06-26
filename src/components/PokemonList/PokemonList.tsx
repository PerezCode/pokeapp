import PokemonCard from "../PokemonCard/Pokemoncard";
import "./PokemonList.css";

import { PokemonListProps as Props } from "./PokemonList.types";

const PokemonList: React.FC<Props> = (props) => {
  const { pokemons } = props;

  return (
    <div className="pokemonList">
      {pokemons.map((pokemon, index) => (
        <div key={`pokemon-${index}`}>
          <PokemonCard />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
