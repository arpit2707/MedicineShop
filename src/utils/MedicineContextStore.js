import React, { useEffect, useState } from "react";
import MedicineContext from "./MedicineContext";
import { crudURL } from "./constants";

const MedicineContextStore = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getMedicines();
  }, []);
  const addMedicines = async (item) => {
    try {
      const postItem = await fetch(crudURL + "medicines", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await postItem.json();
      if (postItem.ok) {
        console.log("Entry Successful");
        getMedicines();
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMedicines = async () => {
    try {
      const postItem = await fetch(crudURL + "medicines", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await postItem.json();
      if (postItem.ok) {
        console.log("Get request Successful");
        console.log(data);
        setItems(data)
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const alterMedicines =async (id,item)=>{
    try {
      console.log("altermedicinescalled",id,item)
      const postItem = await fetch(crudURL + "medicines/"+id, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      });
    
  
      if (postItem.ok) {
        console.log("Alter Entry Successful");
        getMedicines();  
        // const data = await postItem.json();
      } else {
        const data = await postItem.json();
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const store = {
    medicines: items,
    addMedicines: addMedicines,
    getMedicines: getMedicines,
    alterMedicinesCount:alterMedicines,
  };

  return (
    <MedicineContext.Provider value={store}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineContextStore;
