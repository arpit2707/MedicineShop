import React, { useContext, useEffect, useState } from "react";
import MedicineContext from "../utils/MedicineContext";
import CartContext from "../utils/CartContext";

const Medicines = () => {
  const medicineCtx = useContext(MedicineContext);
  const cartCtx = useContext(CartContext);
  const [medicineElements, setmedicineElements] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const value = medicineCtx.medicines;
      setmedicineElements(value);
      console.log(medicineElements);
    };

    fetchData();
  }, [medicineCtx.medicines]);

  const onClickMedicineHandler = (item) => {
    const { _id, description, medicine, price, quantity } = item;
    //cart add
   if(quantity>0){
    cartCtx.addToCart({
      description: description,
      medicine: medicine,
      price: price,
      quantity: 1,
    });

    //alter in medicines
    medicineCtx.alterMedicinesCount(_id, {
      description: description,
      medicine: medicine,
      price: price,
      quantity: quantity - 1,
    });
   } 
  };

  return (
    <div>
      <h1>Medicines</h1>

      {medicineElements &&
        medicineElements.map((item) => {
          return (
            <li className="medItems" key={item._id}>
              <p>{item.medicine}</p>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <p>{item.quantity?item.quantity:"Out of Stock"}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onClickMedicineHandler(item);
                }}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
    </div>
  );
};

export default Medicines;
