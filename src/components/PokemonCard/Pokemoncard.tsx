import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import { PokemonCardProps as Props } from "./PokemonCard.types.ts";

const PokemonCard: React.FC<Props> = (props) => {
  const { pokemon } = props;
  const { name } = pokemon;

  return (
    <Card
      title={name}
      cover={
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3iIiDJQW4HYJk2osK19O3RQ4Hs4MDSF8PQ&s"
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description={"Electric"} />
    </Card>
  );
};

export default PokemonCard;
