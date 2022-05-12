import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Item({ info }) {
  const { id, name, price } = info;
  return (
    <Link to={`/detail/${id}`}>
      <div>
        <Box bg="tomato" w="300px" h="300px" mb="5px"></Box>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </Link>
  );
}

export default Item;
