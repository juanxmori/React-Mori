import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <button className="btn btn-outline-light position-relative">
      <FaShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
      </span>
    </button>
  );
};

export default CartWidget;
