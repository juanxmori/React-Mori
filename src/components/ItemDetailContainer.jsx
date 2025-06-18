import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductoPorId } from "../data/getProducts";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductoPorId(id)
      .then((res) => setProducto(res))
      .catch((err) => console.error("Error al obtener producto:", err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container mt-4">
      {loading ? (
        <p className="text-center">Cargando producto...</p>
      ) : producto ? (
        <ItemDetail {...producto} />
      ) : (
        <p className="text-center">Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
