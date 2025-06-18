import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div key={producto.id} className="col-md-4 mb-4">
          <Item {...producto} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
