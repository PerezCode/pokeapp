import React, { useState, useEffect } from "react";
import { Header } from "..//Header/index";
import { CardsListContainer, LoaderContainer, LoaderImg, LoaderText, Buttons, PreviousButton, NextButton, PreviousArrow, NextArrow} from "./styles";
import { Card } from "../Card/index";
import { Modal } from "../Modal/index";
import ImgArrow from "../../images/pokemon-arrow.png";
import Loading from "../../images/simple_pokeball.gif";

export const CardsList = (props) => {
  const [pokemons, setPokemons] = useState(null);
  const [nextPokemons, setNextPokemons] = useState(null);
  const [previousPokemons, setPreviousPokemons] = useState(null);
  const [pokemonsUrls, setPokemonsUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalState, setModalState] = useState({data: {}, isOpen: false});

  const fetchData = async (URL) => {
    setLoading(true)
    const response = await fetch(URL);
    const data = await response.json();
    setNextPokemons(data.next);
    setPreviousPokemons(data.previous);
    setPokemonsUrls(data.results.map(pokemon => pokemon.url));
  }

  const handlePreviousPokemons = () => {
    if(previousPokemons) {
      fetchData(previousPokemons);
    }
  }

  const handleNextPokemons = () => {
    if(nextPokemons) {
      fetchData(nextPokemons)
    }
  }

  const handleOpenModal = (data) => {
    setModalState({data, isOpen: true});
  }

  const handleCloseModal = () => {
    setModalState({data: {}, isOpen: false});
  }

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon/?limit=10");
  }, []);

  useEffect(() => {
    const promises = pokemonsUrls.map(url => {
      return(
        fetch(url)
        .then((response) => response.json())
        .then((data) => data)
      )
    });

    Promise.all(promises)
    .then((data) => {
      setPokemons(data);
      setLoading(false);
    })
  }, [pokemonsUrls]);

  return (
    <React.Fragment>
      {
        loading
        ? <LoaderContainer>
          <LoaderImg src={Loading} alt="Loader"/>
          <LoaderText>Loading...</LoaderText>
        </LoaderContainer>

        : <React.Fragment>
          <Header />
          <CardsListContainer>
            {pokemons.map(pokemon => <Card key={pokemon.id} data={pokemon} openModal={handleOpenModal}/>) }
          </CardsListContainer>
          <Buttons>
            <PreviousButton onClick={handlePreviousPokemons}>
              <PreviousArrow src={ImgArrow}/>
              Previous page
            </PreviousButton>
            <NextButton onClick={handleNextPokemons}>
              Next page
              <NextArrow src={ImgArrow}/>
            </NextButton>
          </Buttons>
          <Modal isOpen={modalState.isOpen} closeModal={handleCloseModal} data={modalState.data}/>
        </React.Fragment>
      }
    </React.Fragment>
  )
}