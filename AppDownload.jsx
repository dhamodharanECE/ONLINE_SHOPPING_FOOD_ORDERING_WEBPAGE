import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className="app-download" id='Mobile-app'>
        <p>For Download it the App <br /> Tomato App</p>
    <div className="app-download-playstore">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
    </div>
    </div>
  )
}

export default AppDownload