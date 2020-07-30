import React from "react";
import ReactDOM from "react-dom";
import { Link, CardWrapper, ImgContainer, Img, Name, Stats, Stat, StatName, StatQuality } from "./styles";

export const Card = ({data}) => {
  console.log("Hello: ", data);
  return(
    //Link
    <Link to={`/pokemon/${data.name}`}>
      <CardWrapper>
        <Name>{data.name}</Name>
        <ImgContainer>
          <Img src={data.sprites.other.dream_world.front_default} alt={data.name}/>
        </ImgContainer>
        <Stats>
          <Stat>
            <StatName> {data.stats[0].stat.name} </StatName>
            <StatQuality type="hp"> {data.stats[0].base_stat} </StatQuality>
          </Stat>
          <Stat>
            <StatName> {data.stats[1].stat.name} </StatName>
            <StatQuality type="attack"> {data.stats[1].base_stat} </StatQuality>
          </Stat>
          <Stat>
            <StatName> {data.stats[2].stat.name} </StatName>
            <StatQuality type="defense"> {data.stats[2].base_stat} </StatQuality>
          </Stat>
        </Stats>
      </CardWrapper>
    </Link>
  )
}