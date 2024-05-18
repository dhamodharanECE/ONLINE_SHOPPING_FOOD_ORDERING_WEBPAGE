import React from 'react'
import'./Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='Footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} />
                <p>Food is very Quality and Naturally for add the ingraiance of content</p>
            
            <div className="footer-content-icons">
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>
            </div>
            <div className='footer-content-center'> 
                <h2>Company</h2>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>Mobile.No : +91 93614 99647</li>
                    <li>Email.Id : dhamodharans@gmail.com</li>
                </ul>
            </div>
        </div> 
        <hr/>
        <p className="footer-copy-write">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer