import styled from "styled-components";
import { Link as Card } from "react-router-dom";

export const Link = styled(Card)`
  height: min-content;
  margin: 15px;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  transition: .5s;
  &:hover {
    transform:scale(1.1);
  }
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  padding: 15px 5px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 2px 12px 1px #191919;
`
export const Name = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: #191919;
`
export const ImgContainer = styled.figure`
  width: 70%;
  margin: 0;
`
export const Img = styled.img`
  width: 100%;
`
export const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
`
export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StatName = styled.div`
  color: #191919
`
export const StatQuality = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  color: #191919;
  border: 2px solid #2ecc71;
  border-radius: 50%;
  &[type="attack"] {
    border-color: #e74c3c;
  }
  &[type="defense"] {
    border-color: #3498db;
  }
`
