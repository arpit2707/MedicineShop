import { createContext } from "react";

const CartContext=createContext({
    show:0,
    toggleShow:()=>{},
    cartElements:[],
    addToCart:()=>{},
    getCart:()=>{},
   
})

export default CartContext;