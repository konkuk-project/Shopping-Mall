import React from "react";
import { Link } from "react-router-dom";
function CartItem({ info }) {
  const { id, name, price, cart_num } = info;
  return (
    <Link
      to={`../detail`}
      state={{
        id,
        name,
        price,
        cart_num,
      }}
    >
      <div className="cart-item">
        <div className="thumbnail"></div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="price">{price}</div>
          <div className="number">수량 : {cart_num}</div>
        </div>
      </div>
    </Link>
  );
}

export default CartItem;
