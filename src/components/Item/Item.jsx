import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Item = ({ id, name, img, category, price }) => {
  console.log('render de item: ', id);
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Categoria: {category}</p>
        <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
        <Link to={`/detail/${id}`} className="btn btn-primary">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
