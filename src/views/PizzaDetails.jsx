import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../Context/PizzaContext";
import "bootstrap/dist/css/bootstrap.min.css";

const PizzaDetails = () => {
  const { id } = useParams(); // Obtén el id de la pizza desde la URL
  const { pizzas, addToCart } = useContext(PizzaContext);
  const pizza = pizzas.find((p) => p.id === id);

  // Estado para rastrear si el mouse está sobre la imagen
  const [isMouseOver, setIsMouseOver] = useState(false);

  if (!pizza) {
    return <div>Pizza no encontrada.</div>;
  }

  // Estilo personalizado para la imagen
  const imageStyle = {
    maxWidth: "400px", // Ancho máximo de la imagen
    margin: "10px", //
    border: "4px solid #e9e9e9", // Borde alrededor de la imagen
    borderRadius: "9px",
    boxShadow: "3px 3px 5px #888888", // Sombra de la imagen
    transition: "transform 0.4s", // Agrega una transición a la propiedad "transform"
    transform: isMouseOver ? "translate(5px, 5px)" : "translate(0, 0)", // Efecto de desplazamiento
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={pizza.img}
            alt={pizza.name}
            style={imageStyle}
            onMouseEnter={() => setIsMouseOver(true)} // Manejar el mouse sobre la imagen
            onMouseLeave={() => setIsMouseOver(false)} // Manejar el mouse fuera de la imagen
          />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name} Detalles</h2>
          <p>{pizza.desc}</p>
          <p>Precio: ${pizza.price}</p>
          <button className="btn btn-danger float-right" onClick={() => addToCart(pizza)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
