import React, { useContext, useState } from "react";
import { PizzaContext } from "../Context/PizzaContext";
import CartModal from "../views/CartModal";
import "./Navbar.css";

const Navbar = () => {
  const { shopCart, total } = useContext(PizzaContext);
  const totalQuantity = shopCart.reduce((acc, pizza) => acc + pizza.quantity, 0);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
    console.log("Modal visible: true");
  };

  const closeCart = () => {
    console.log("Modal cerrado");
    setIsCartOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>Mama Mia</h1>
      <div onClick={openCart} className="cart-info">
        <span className="mr-2">Total: ${total}</span>
        <img src="/carrito.png" alt="Carrito" />
        <span>{totalQuantity}</span>
      </div>
      {isCartOpen && <CartModal closeModal={closeCart} />}
    </nav>
  );
};

export default Navbar;
