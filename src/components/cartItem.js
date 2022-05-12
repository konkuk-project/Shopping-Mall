import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function CartItem({ info }) {
  const { id, name, price, quantity } = info;
  return (
    <Link to={`../detail/${id}`}>
      <Flex w="610px">
        <Box bg="tomato" w="100px" h="100px" mb="10px" mr="10px"></Box>
        <div className="info">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
          <div className="number">수량 : {quantity}</div>
        </div>
      </Flex>
    </Link>
  );
}

export default CartItem;
