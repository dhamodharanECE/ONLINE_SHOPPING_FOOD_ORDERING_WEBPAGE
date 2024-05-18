import React, { useContext } from 'react'
import './card.css'
import { StoreContext } from '../../components/context/StoreContext'
const card = () => {
  const {cartItems,food_list,removeFromCart} = useContext(StoreContext)
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        <br /> 
      </div>
    </div>
  )
}

export default card