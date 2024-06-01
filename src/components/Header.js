import React, { useContext } from 'react'
import "./Header.css"
import CartContext from '../utils/CartContext'

const Header = () => {
  const cartCtx=useContext(CartContext)

  const onclickHandler =(e)=>{
    e.preventDefault();
    console.log("check")
    cartCtx.toggleShow();

    console.log(cartCtx.show)
  }
  return (
    <div className="headercart" >
        <button onClick={onclickHandler}>Cart  {cartCtx.cartElements.length}</button>
    </div>
  )
}

export default Header