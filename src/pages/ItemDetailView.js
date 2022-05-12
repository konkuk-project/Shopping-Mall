import React from "react";
import { Link, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { itemInfos } from "../entities/items/MOCK_DATA";

function Detail({ onAddToCart }) {
  const { id } = useParams();
  const item = itemInfos.find((info) => info.id == id);

  const onClick = () => onAddToCart(item);

  return (
    <div className="detail-item">
      {item ? (
        <>
          <Box bg="tomato" w="300px" h="300px"></Box>
          <div className="name">{item.name}</div>
          <div className="price">{item.price}</div>
          <button onClick={onClick}>장바구니 담기</button>
          {/* </Link> */}
        </>
      ) : (
        <p>상품을 찾을 수 없습니다.</p>
      )}
    </div>
  );
}

export default Detail;
