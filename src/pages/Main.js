import React from "react";
import Item from "../components/Item";
function Main({ itemInfos }) {
  return (
    <div className="item-list">
      {itemInfos.map((info) => (
        <Item info={info} key={info.id} />
      ))}
    </div>
  );
}

export default Main;
