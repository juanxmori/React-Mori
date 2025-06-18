import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
  const [carrito, setCarrito] = useState(carritoInicial);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemExistente = carrito.find((prod) => prod.id === item.id);
    if (itemExistente) {
      const nuevoCarrito = carrito.map((prod) =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...item, cantidad }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const cantidadTotal = () =>
    carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const precioTotal = () =>
    carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        cantidadTotal,
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
