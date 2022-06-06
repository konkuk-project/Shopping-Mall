import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Item({ info }) {
  const { id, title, url, thumbnailUrl } = info;
  return (
    <Link to={`/detail/${id}`}>
      <span>{id}</span>
      <div>
        <Image src={thumbnailUrl} width="100%" />
        <div className="name">{title}</div>
        <div className="price">{url}</div>
      </div>
    </Link>
  );
}

export default Item;
