import { createContext } from "react";

const MedicineContext=createContext({
    medicines:[],
    addMedicines:()=>{},
    getMedicines:()=>{},
    alterMedicinesCount:()=>{}
})

export default MedicineContext;