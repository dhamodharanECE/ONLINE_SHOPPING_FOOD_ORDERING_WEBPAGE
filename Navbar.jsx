import React, { useState } from 'react'
import './Navbar1.css'
import '../assets/assets'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({notsetLogin}) => {
  const [menu,setMenu] = useState("menu");
  return (

    <div className='navbar'>
    <img src={assets.add} alt='love' className='logo'/>
    <ul className='navbar-menu'>
      <Link  href='#Home' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
      <a href='#Menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
      <a href='#Mobile-app' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
      <a href='#Footer' onClick={()=>setMenu("contect-us")} className={menu==="contect-us"?"active":""}>Contct-Us</a>
    </ul>
    <div className='navbar-right'>
      <img src={assets.search_icon} alt='Not_Search'></img>
        <div className='navbar-search-icons'>
          <img src={assets.basket_icon} alt='Not'></img>
              <div className='dot'></div>
    </div>
    <button className='sign' onClick={()=>notsetLogin(true)}>Sign In</button>
    </div>
  </div>
  )
}

export default Navbar