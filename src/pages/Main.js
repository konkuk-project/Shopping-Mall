import React from "react";
import Item from "../components/Item";
import { Flex } from "@chakra-ui/react";

function Main({ itemInfos }) {
  return (
    <Flex wrap="wrap" gap="10px" w="610px">
      {itemInfos.map((info) => (
        <Item info={info} key={info.id} />
      ))}
    </Flex>
  );
}

export default Main;
