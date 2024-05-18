// import React, { useState } from 'react'

import './FoodItem.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
 
 const {cartItems,addToCart,removeFromCart }= useContext(StoreContext);
  return (
    <div  className='food-item' >
        <div className="food-item1">
                <img className='food-item-image'src={image} alt=''/>
                {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} />
                :<div className='food-item-counter'>
               <img  onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} />
                <p>{cartItems[id]}</p>
                <img   onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
                 </div>
              }
            </div>
             <div className="food-itme-info">
            <div className="food-item-name-rating">
                <p className='food'>{name}</p>
              </div>
              <div className='food2'>
                <img src={assets.rating_starts} alt='love' />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className="food-item-price">Rs.{price}</p>
        </div>
       
        
    </div>
  )
}

export default FoodItem