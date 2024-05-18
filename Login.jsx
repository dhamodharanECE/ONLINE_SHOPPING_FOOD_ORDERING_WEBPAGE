import React, { useState } from 'react'
import './Login.css';
import { assets } from '../../assets/assets';

const Login = ({notsetLogin}) => {
    const [currentState,nxtState]=useState("Login")
  return (
    <div className="login">
        <form className="login-continer">
            <div className="login-tittle">
                <h2>{currentState}</h2>
                <img onClick={()=>notsetLogin(false)} src={assets.cross_icon} />
            </div>
                <div className="login-inputs">
                    {currentState==="Login"?<></>:<input type='text' placeholder='Your Name' required/>}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required/>
                </div>
            <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-condition">
            <input type='checkbox' required/>
            <p>By continuing, i agrree to the terms of use & privacy policy.</p>
            </div> 
            {currentState==='Login'
            ?<p className='l1'>Create a new account?<span onClick={()=>nxtState("Sign Up")} >Click here</span></p>
            :<p className='l2'>Alerady have an account?<span onClick={()=>nxtState("Login")}>Login here</span></p>
            }
          
        </form>
       
    </div>
  )
}

export default Login