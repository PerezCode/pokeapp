import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`
export const ModalCard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  height: 80vh;
  padding: 15px;
  font-family: 'Poppins',sans-serif;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: scroll;
`
export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  padding: 0.5rem;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 50%;
  background-color: #eb2f06;
  cursor: pointer;
`
export const Name = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: #191919;
`
export const ImgContainer = styled.figure`
  width: 20%;
  margin: 0;
`
export const Img = styled.img`
  width: 100%;
`
export const List = styled.ul`
  margin: 5px 0;
  padding: 0;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
`
export const Stat = styled.p`
  margin: 5px 0;
`
export const MoreDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
`
export const DetailName = styled.h3`
  margin: 0;
`
export const Detail = styled.div`
  width: 85%;
  margin: 15px 0;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 1px 6px 1px #191919;
`