import React from "react";
import { Grid } from "@chakra-ui/react";
import Item from "./Element";

const ItemList = ({ items }) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      gap="10px"
      minH="100vh"
    >
      {items.map((item) => (
        <Item info={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default ItemList;
