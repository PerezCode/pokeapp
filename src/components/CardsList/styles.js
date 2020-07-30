import styled from "styled-components";

export const CardsListContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 1200px;
  margin: 0 20px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const LoaderImg = styled.img`
  width: 200px;
`
export const LoaderText = styled.p`
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: white;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  font-family: 'Poppins', sans-serif;
  color: white;
`
export const PreviousButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 140px;
  height: 50px;
  margin: 0 20px;
  padding: 10px;
  font-weight: 600;
  color: white;
  border: 1px solid #9b59b6;
  border-radius: 40px;
  background: #8e44ad;
  &:hover {
    background: #9b59b6;
  }
  &:focus {
    border: none;
    outline: none;
  }
`
export const NextButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 140px;
  height: 50px;
  margin: 0 20px;
  padding: 10px;
  font-weight: 600;
  color: white;
  border: 1px solid #9b59b6;
  border-radius: 40px;
  background: #8e44ad;
  &:hover {
    background: #9b59b6;
  }
  &:focus {
    border: none;
    outline: none;
  }
`
export const PreviousArrow = styled.img`
  width: 20%;
  margin: 0 10px;
  transform: rotate(-90deg);
`
export const NextArrow = styled.img`
  width: 20%;
  margin: 0 10px;
  transform: rotate(90deg);
`
