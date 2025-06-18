import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../data/getProducts";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    const llamada = categoriaId
      ? getProductosPorCategoria(categoriaId)
      : getProductos();

    llamada
      .then((res) => setProductos(res))
      .catch((error) => console.error("Error cargando productos:", error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">
        {categoriaId ? `Productos: ${categoriaId}` : "Todos los productos"}
      </h2>
      {loading ? (
        <p className="text-center">Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
