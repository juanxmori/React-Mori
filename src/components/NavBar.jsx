import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Veterinaria City Bell
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/alimentos">
                Alimentos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/juguetes">
                Juguetes
              </Link>
            </li>
            {/* Agrega más categorías si querés */}
          </ul>
        </div>
        <Link to="/cart" className="btn btn-outline-primary">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
