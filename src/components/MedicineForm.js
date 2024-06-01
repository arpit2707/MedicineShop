import React, { useContext, useRef } from "react";
import MedicineContext from "../utils/MedicineContext";

const MedicineForm = () => {
  const medicine = useRef();
  const description = useRef();
  const price = useRef();
  const quantity = useRef();
  const medicineCtx= useContext(MedicineContext)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formObj= {
         medicine:medicine.current.value,
         description :description.current.value,
         price:price.current.value,
         quantity:quantity.current.value,
    }

    console.log(formObj)
    medicineCtx.addMedicines(formObj)



  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Medicine Name:</label>
        <input ref={medicine} type="text"></input>

        <label>Description:</label>
        <input ref={description} type="text"></input>

        <label>Price:</label>
        <input ref={price} type="number"></input>

        <label>Quantity Available:</label>
        <input ref={quantity} type="number"></input>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default MedicineForm;
