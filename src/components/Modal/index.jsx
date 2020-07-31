import React from "react";
import ReactDOM from "react-dom";
import { Container, ModalCard, CloseButton, Name, ImgContainer, Img, List, ListItem, Stat, MoreDetails, DetailName, Detail} from "./styles";

export const Modal = ({ isOpen, data, closeModal}) => {
  if(!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <Container>
      <ModalCard>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <ImgContainer>
          <Name>{data.name}</Name>
          <Img src={data.sprites.other.dream_world.front_default} alt={data.name}/>
          <DetailName>Stats</DetailName>
          <List>
            {
              data.stats.map((stat) => <ListItem key={stat.stat.name}>
                <Stat>{stat.stat.name.replace("-", " ")}: <span>{stat.base_stat}</span></Stat>
              </ListItem> )
            }
          </List>
        </ImgContainer>
        <MoreDetails>
          <Detail>
            <DetailName>Abilities</DetailName>
            <List>
              {
                data.abilities.map((ability) => <ListItem key={ability.ability.name}>
                  <Stat>{ability.ability.name.replace("-", " ")}</Stat>
                </ListItem> )
              }
            </List>
          </Detail>
          <Detail>
            <DetailName>Moves</DetailName>
            <List>
              {
                data.moves.map((move) => <ListItem key={move.move.name}>
                  <Stat>{move.move.name.replace("-", " ")}</Stat>
                </ListItem> )
              }
            </List>
          </Detail>
        </MoreDetails>
      </ModalCard>
    </Container>
  , document.getElementById("modal"))
}