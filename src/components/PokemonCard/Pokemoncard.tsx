import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokemonCard = () => {
  return (
    <Card
      title={"Pikachu"}
      cover={
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw3iIiDJQW4HYJk2osK19O3RQ4Hs4MDSF8PQ&s"
          alt="pikachu"
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description={"Electric"} />
    </Card>
  );
};

export default PokemonCard;
