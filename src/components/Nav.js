import React from "react";
import { Link } from "react-router-dom";

function Nav({ data }) {
  return (
    <div className="nav">
      <Link to="/">메인</Link>
      <Link to="/cart">장바구니</Link>
      <span>{data}</span>
    </div>
  );
}

export default Nav;
