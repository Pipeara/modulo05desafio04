import React, { useContext } from "react";
import { PizzaContext } from "../Context/PizzaContext";
import "bootstrap/dist/css/bootstrap.min.css";

const CartModal = ({ closeModal }) => {
  const { shopCart, total, incrementPizzaQuantity, decrementPizzaQuantity } = useContext(PizzaContext);

  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content my-custom-modal">
          <div className="modal-header">
            <h5 className="modal-title">Carrito de Compras</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {shopCart.map((pizza) => (
                <li key={pizza.id} className="list-group-item">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src={pizza.img} alt={pizza.name} className="img-thumbnail img-fluid" />
                    </div>
                    <div className="col-md-5">
                      <h3>{pizza.name}</h3>
                      <p>{pizza.desc}</p>
                      <p className="font-weight-bold text-primary">Precio: ${pizza.price}</p>
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex flex-column align-items-center">
                        <p className="font-weight-bold text-primary">Cantidad: {pizza.quantity}</p>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => incrementPizzaQuantity(pizza.id)}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => decrementPizzaQuantity(pizza.id)}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <p className="total-price">
            <span className="font-weight-bold" style={{ color: 'blue' }}>Total:</span>{" "}

              <span className="text-success">${total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
