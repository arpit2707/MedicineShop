import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { crudURL } from "./constants";

const CartContextStore = (props) => {
  const [elem, setElem] = useState([]);
  const [show,setShow]=useState(0)


  useEffect(()=>{
    getCartItems();
  },[])

  const toggleShow=()=>{
    setShow(!show)
  }
  const addToCart = async (item) => {
    try {
      const postItem = await fetch(crudURL + "cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await postItem.json();
      if (postItem.ok) {
        console.log("Cart Entry Successful");
        getCartItems();
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems=async ()=>{
    try {
      const postItem = await fetch(crudURL + "cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await postItem.json();
      if (postItem.ok) {
        console.log("Get cart request Successful");
        console.log(data);
        setElem(data)
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const store = {
    show:show,
    toggleShow:toggleShow,
    cartElements: elem,
    addToCart: addToCart,
    getCart:getCartItems,
    
  };
  return (
    <CartContext.Provider value={store}>{props.children}</CartContext.Provider>
  );
};

export default CartContextStore;
