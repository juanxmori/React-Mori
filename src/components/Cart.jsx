import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito, precioTotal } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío 🐾</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Carrito de compras</h2>
      <ul className="list-group">
        {carrito.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{item.nombre}</strong> <br />
              Cantidad: {item.cantidad} <br />
              Precio unitario: ${item.precio}
            </div>
            <div>
              <p className="mb-0">Subtotal: ${item.precio * item.cantidad}</p>
              <button
                className="btn btn-danger btn-sm mt-2"
                onClick={() => eliminarDelCarrito(item.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-end mt-3">
        <h4>Total: ${precioTotal()}</h4>
        <button className="btn btn-warning me-2" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
        <button className="btn btn-success" disabled>
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
