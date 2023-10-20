import React, { createContext, useEffect, useState } from "react";

const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [shopCart, setShopCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Cargar datos de pizzas desde el archivo JSON
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/pizzas.json');
          const data = await response.json();
          const pizzaData = data.map((pizza) => ({
            desc: pizza.desc,
            id: pizza.id,
            img: pizza.img,
            ingredients: pizza.ingredients,
            name: pizza.name,
            price: pizza.price,
            quantity: 1, // Establece quantity en 1 por defecto
          }));
          setPizzas(pizzaData);
    
          // Agrega un console.log para verificar si los datos se cargaron correctamente
          console.log("Pizzas cargadas:", pizzaData);
        } catch (error) {
          console.error("Error fetching pizza data:", error);
        }
      };
      fetchData();
    }, []);
    
  // Agregar pizza al carrito
  const addToCart = (selectedPizza) => {
    const existingPizzaIndex = shopCart.findIndex((pizza) => pizza.id === selectedPizza.id);
    if (existingPizzaIndex !== -1) {
      const updatedCart = [...shopCart];
      updatedCart[existingPizzaIndex].quantity += 1;
      setShopCart(updatedCart);
      console.log("Pizza agregada al carrito:", selectedPizza); // Agrega este console.log
    } else {
      setShopCart([...shopCart, { ...selectedPizza }]);
      console.log("Pizza agregada al carrito:", selectedPizza);
    }
    setTotal((prevTotal) => prevTotal + selectedPizza.price);
  };

  // Incrementar cantidad de una pizza en el carrito
  const incrementPizzaQuantity = (id) => {
    const updatedCart = shopCart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, quantity: pizza.quantity + 1 };
      }
      return pizza;
    });
    setShopCart(updatedCart);
    calculateTotal(updatedCart);
  };

  // Decrementar cantidad de una pizza en el carrito
  const decrementPizzaQuantity = (id) => {
    const updatedCart = shopCart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, quantity: pizza.quantity - 1 };
      }
      return pizza;
    });
    const filteredCart = updatedCart.filter((pizza) => pizza.quantity > 0);
    setShopCart(filteredCart);
    calculateTotal(filteredCart);
  };

  // Calcular el total del carrito
  const calculateTotal = (cart) => {
    const totalPrice = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
    setTotal(totalPrice);
  };

  const contextValue = {
    pizzas,
    shopCart,
    total,
    calculateTotal,
    addToCart,
    incrementPizzaQuantity,
    decrementPizzaQuantity,
  };

  return (
    <PizzaContext.Provider value={contextValue}>
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzaProvider, PizzaContext };
