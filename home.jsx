import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Expolourmenu from '../../components/Expolourmenu/Expolourmenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const home = () => {
  const [category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <Expolourmenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default home