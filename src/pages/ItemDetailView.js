import React from "react";
import { Link, useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  return (
    <div className="detail-item">
      <div className="thumbnail"></div>
      <div className="name">{location.state.name}</div>
      <div className="price">{location.state.price}</div>
      <Link
        to={`../cart`}
        state={{
          id: location.state.id,
          cart_num: location.state.cart_num + 1,
        }}
      >
        <button>장바구니 담기</button>
      </Link>
    </div>
  );
}

export default Detail;
