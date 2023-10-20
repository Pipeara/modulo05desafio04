import React, { useContext } from "react";
import { PizzaContext } from "../Context/PizzaContext";
import "bootstrap/dist/css/bootstrap.min.css";

const PizzaItem = ({ pizza, onVerClick }) => {
  const { addToCart } = useContext(PizzaContext);

  const handleAgregarClick = () => {
    addToCart(pizza);
  };

  return (
    <div className="col-md-4 mt-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>

          <h5>Ingredientes:</h5>
          <ul className="list-group">
            {pizza.ingredients.map((ingredient, idx) => (
              <li className="list-group-item" key={idx}>
                {ingredient}
              </li>
            ))}
          </ul>
          <p className="card-text">Precio: ${pizza.price}</p>
          <button className="btn btn-primary" onClick={() => onVerClick(pizza)}>
            Ver
          </button>
          <button className="btn btn-success" onClick={handleAgregarClick}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
