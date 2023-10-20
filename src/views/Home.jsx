import React, { useContext } from "react";
import { PizzaContext } from "../Context/PizzaContext";
import PizzaItem from "./PizzaItem";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  const navigate = useNavigate(); // Agrega la función de navegación

  // Función para navegar a los detalles de una pizza
  const navigateToPizzaDetails = (pizzaId) => {
    navigate(`/pizza/${pizzaId}`);
  };

  return (
    <div>
      <h1>Catálogo de Pizzas</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <PizzaItem
              pizza={pizza}
              onVerClick={() => navigateToPizzaDetails(pizza.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
