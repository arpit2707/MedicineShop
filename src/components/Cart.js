import React, { useContext, useEffect, useState } from "react";
import CartContext from "../utils/CartContext";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const cartCtx = useContext(CartContext);

  useEffect(() => {
    setCartItems(cartCtx.cartElements);
  }, [cartCtx.cartElements]);
  return (
    <div>
      <h1>Cart Items</h1>
      <div>
        {cartItems &&
          cartItems.map((item) => {
            return (
              <li className="cartItems" key={item._id}>
                <p>{item.medicine}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <p>{item.quantity}</p>
              </li>
            );
          })}
      </div>
      
    </div>
  );
};

export default Cart;
