import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList.js";
import Searcher from "./components/Searcher/Searcher.jsx";
import { Col } from "antd";
import LogoPokeduxSVG from "./assets/logo_pokedux.svg";

function App() {
  return (
    <div className="app">
      <Col span={4} offset={10}>
        <img className="logo-pokedux" src={LogoPokeduxSVG} alt="logo pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
