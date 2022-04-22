import React from "react";
import CartItem from "../components/cartItem";
import { useLocation } from "react-router-dom";

function Cart({ itemInfos, setData }) {
  // 1. 총 결제금액 계산
  let total_price = 0;
  itemInfos.forEach((info) => {
    total_price += info.price * info.cart_num;
  });
  // 2. 장바구니 담기기 클릭시 해당제품 수량 올리기
  const location = useLocation();
  if (location.state) {
    let targetItem = itemInfos.find((item) => item.id === location.state.id);
    if (targetItem) {
      targetItem.cart_num = location.state.cart_num;
      itemInfos[location.state.id - 1] = targetItem;
    }
  }
  // 3. 장바구니에 1회 이상 담긴 제품만 보여주기
  let selectedItems = itemInfos.filter((info) => info.cart_num > 0);
  // 4. 카트에 담긴 아이쳄 종류 숫자
  console.log(selectedItems.length);
  setData(selectedItems.length);
  if (selectedItems.length > 0) {
    return (
      <>
        <div className="item-list">
          {selectedItems.map((info) => (
            <CartItem info={info} key={info.id} />
          ))}
        </div>
        <div className="total-price">결제 예정금액 : {total_price} </div>
      </>
    );
  } else {
    return (
      <>
        <div className="item-list" style={{ height: "500px" }}></div>
        <div className="total-price">결제 예정금액 : 0 </div>
      </>
    );
  }
}

export default Cart;
