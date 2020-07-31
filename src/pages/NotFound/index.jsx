import React from "react";
import NotFoundImg from "../../images/404.png";
import { Container, Img } from "./styles.js";

export const NotFound = () => {
  return(
    <Container>
      <Img src={NotFoundImg}/>
    </Container>
  )
}