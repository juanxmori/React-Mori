import React, { useState } from "react";

const ItemCount = ({ stock = 5, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex mb-2">
        <button className="btn btn-outline-secondary" onClick={decrementar}>
          -
        </button>
        <span className="mx-3 fs-5">{cantidad}</span>
        <button className="btn btn-outline-secondary" onClick={incrementar}>
          +
        </button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
