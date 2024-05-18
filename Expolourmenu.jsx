import React from 'react'
import './Expolourmenu.css';
import { menu_list } from '../../assets/assets';

const Expolourmenu = ({category,setCategory}) => {
  return (
    <div className='expolore-menu' id='Menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a different array foods</p>
   <div className='explore-menu-list'> 
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name) } key={index} className='explore-menu-list-items'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}  alt='love'/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
   </div>
    </div>
  )
}

export default Expolourmenu