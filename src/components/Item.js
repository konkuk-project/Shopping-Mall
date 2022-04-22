import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Item({ info }) {
  const { id, name, price, cart_num } = info;
  return (
    <Link
      to={`/detail`}
      state={{
        id,
        name,
        price,
        cart_num,
      }}
    >
      <div className="item">
        <div className="thumbnail"></div>
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </Link>
  );
}

export default Item;
