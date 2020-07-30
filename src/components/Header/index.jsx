import React from "react";
import { Container, ImgContainer, Img } from "./styles";
import Logo from "../../images/pokemon-logo.png";

export const Header = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={Logo} />
      </ImgContainer>
    </Container>
  )
}