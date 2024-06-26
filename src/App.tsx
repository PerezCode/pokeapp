import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList.js";
import Searcher from "./components/Searcher/Searcher.jsx";
import { Col } from "antd";

function App() {
  return (
    <div className="app">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={[]} />
    </div>
  );
}

export default App;
