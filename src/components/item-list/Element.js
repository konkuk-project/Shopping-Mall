import React from "react";
import { Link } from "react-router-dom";
import { Image, Box, Text } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Item({ info }) {
  const { id, title, thumbnailUrl } = info;
  return (
    <Box>
      <span>{id}</span>
      <Box>
        <Link to={`/detail/${id}`}>
          <Image src={thumbnailUrl} w="100%" />
        </Link>
      </Box>
      <Link to={`/detail/${id}`}>
        <Text noOfLines={1}>{title}</Text>
        <Text noOfLines={1}>10,000</Text>
      </Link>
    </Box>
  );
}

export default Item;
