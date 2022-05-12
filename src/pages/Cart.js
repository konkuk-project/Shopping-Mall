import React from "react";
import CartItem from "../components/CartItem";
import { useLocation } from "react-router-dom";
import { Box, Divider } from "@chakra-ui/react";

function Cart({ data }) {
  // 1. 총 결제금액 계산
  let total_price = 0;
  // // 2. 장바구니 담기기 클릭시 해당제품 수량 올리기
  // const location = useLocation();
  // // console.log(location.state);
  // if (location.state) {
  //   let targetItem = itemInfos.find((item) => item.id == location.state.id);
  //   if (targetItem) {
  //     targetItem.cart_num = location.state.num;
  //     itemInfos[location.state.id - 1] = targetItem;
  //   }
  // }

  console.log(data);

  data.forEach((info) => {
    total_price += Number(info.price.slice(1)) * info.quantity;
  });

  console.log(total_price);

  // // 3. 장바구니에 1회 이상 담긴 제품만 보여주기
  // let isSaved = window.localStorage.getItem("user");
  // console.log(isSaved);
  // let selectedItems; // 카트에 담긴 아이템 작품
  // if (isSaved) {
  //   // 저장된 정보가 있을 경우
  //   selectedItems = JSON.parse(isSaved);
  //   window.localStorage.removeItem("user");
  // } else {
  //   // 저잗된 정보가 없을 경우
  //   selectedItems = itemInfos.filter((info) => info.cart_num > 0);
  //   window.localStorage.setItem("user", JSON.stringify(selectedItems));
  // }

  // console.log("cart: selectedItems: ", JSON.stringify(selectedItems));

  if (data.length > 0) {
    return (
      <>
        <div className="item-list">
          {data.map((info) => (
            <CartItem info={info} key={info.id} />
          ))}
        </div>
        <Divider />
        <Box mt="5px">결제 예정금액 : ${total_price.toFixed(2)} </Box>
      </>
    );
  } else {
    return (
      <>
        <div className="item-list" style={{ height: "500px" }}></div>
        <Divider />
        <Box mt="5px">결제 예정금액 : 0 </Box>
      </>
    );
  }
}

export default Cart;
