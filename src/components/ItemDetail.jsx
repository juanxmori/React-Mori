import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, nombre, imagen, descripcion, precio, categoria }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleAgregar = (cantidad) => {
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
    alert(`Agregaste ${cantidad} unidad(es) de "${nombre}" al carrito`);
  };

  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagen} className="img-fluid rounded-start" alt={nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text">
              <strong>Precio:</strong> ${precio}
            </p>
            <p className="card-text">
              <small className="text-muted">Categoría: {categoria}</small>
            </p>

            <ItemCount stock={10} initial={1} onAdd={handleAgregar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
