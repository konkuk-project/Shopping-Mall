import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Item({ info }) {
  const { id, name, price, imageUrl } = info;
  return (
    <Link to={`/detail/${id}`}>
      <span>{id}</span>
      <div>
        <Image src={imageUrl} width="100%" />
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </Link>
  );
}

export default Item;
