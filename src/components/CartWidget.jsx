import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div style={{ position: "relative" }}>
      <FaShoppingCart size={24} />
      {cantidadTotal() > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "12px",
          }}
        >
          {cantidadTotal()}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
