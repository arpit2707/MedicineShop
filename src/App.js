import "./App.css";
import Header from "./components/Header";
import React, { useContext, useEffect, useState } from "react";
import MedicineForm from "./components/MedicineForm";
import MedicineContextStore from "./utils/MedicineContextStore";
import Medicines from "./components/Medicines";
import CartContextStore from "./utils/CartContextStore";
import Cart from "./components/Cart";
import CartContext from "./utils/CartContext";

function App() {
  const cartCtx= useContext(CartContext);

  return (
    <React.Fragment>
      <CartContextStore>
        <MedicineContextStore>
          <Header />
          <MedicineForm />
          <Medicines />
          <Cart/>
        </MedicineContextStore>
      </CartContextStore>
    </React.Fragment>
  );
}

export default App;
