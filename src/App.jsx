import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={
            <h2 className="text-center mt-5">404 - Página no encontrada</h2>
          }
        />
      </Routes>
    </>
  );
};

export default App;
