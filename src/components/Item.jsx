import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        <Link to={`/item/${producto.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
