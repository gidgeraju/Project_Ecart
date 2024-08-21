import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cartProduct, setCartProduct] = useState(
    JSON.parse(localStorage.getItem("cartProduct")) || null
  );
  const navigate = useNavigate();

  const handleRemoveFromCart = () => {
    localStorage.removeItem("cartProduct");
    setCartProduct(null);
  };

  const handleBackToProducts = () => {
    navigate("/Products");
  };

  if (!cartProduct) {
    return (
      <div>
        <h2 className="cartem">Your cart empty</h2>
        <div className="back">
          <button onClick={handleBackToProducts}>Back to Products</button>{" "}
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="carth">Your Cart</h1>
      <div className="cart-product">
        <img
          src={cartProduct.thumbnail}
          alt={cartProduct.title}
          className="imagec"
        />
        <div className="detailsc">
          <h2>{cartProduct.title}</h2>
          <p>{cartProduct.description}</p>
          <p>
            <b>Price:</b> ${cartProduct.price}
          </p>
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
