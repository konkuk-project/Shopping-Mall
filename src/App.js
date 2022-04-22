import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";
import Detail from "./pages/ItemDetailView";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

let itemInfos = [
  {
    id: 1,
    name: "item1",
    price: 1000,
    cart_num: 0,
  },
  {
    id: 2,
    name: "item2",
    price: 2000,
    cart_num: 0,
  },
  {
    id: 3,
    name: "item3",
    price: 3000,
    cart_num: 0,
  },
  {
    id: 4,
    name: "item4",
    price: 4000,
    cart_num: 0,
  },
  {
    id: 5,
    name: "item5",
    price: 5000,
    cart_num: 0,
  },
];

function App() {
  const [data, setData] = useState(0);

  return (
    <>
      <Nav data={data} />
      <Box p="20px">
        <Routes>
          <Route path="/" element={<Main itemInfos={itemInfos} />} />
          <Route path="detail" element={<Detail />} />
          <Route
            path="cart"
            element={<Cart itemInfos={itemInfos} setData={setData} />}
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
// 수정
