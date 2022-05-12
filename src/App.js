import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Detail from "./pages/ItemDetailView";
import Main from "./pages/Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import Container from "./components/Container";
import { itemInfos } from "./entities/items/MOCK_DATA";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (currentItem) => {
    setCartItems((prev) => {
      const next = [...prev];

      if (prev.some((comp) => comp.id == currentItem.id)) {
        let idx = next.findIndex((item) => item.id === currentItem.id);
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + 1,
        };
      } else {
        next.push({
          ...currentItem,
          quantity: 1,
        });
      }

      localStorage.cartItems = JSON.stringify(next);

      return next;
    });

    navigate("/cart");
  };

  useEffect(() => {
    if (localStorage.cartItems) {
      setCartItems(JSON.parse(localStorage.cartItems));
    }
  }, []);

  return (
    <>
      <Nav cartCount={cartItems.length} />
      <Container>
        <Routes>
          <Route path="/" element={<Main itemInfos={itemInfos} />} />
          <Route
            path="detail/:id"
            element={<Detail onAddToCart={handleAddToCart} />}
          />
          <Route path="cart" element={<Cart data={cartItems} />} />
          <Route path="*" element={<>not found 404</>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
// 수정
