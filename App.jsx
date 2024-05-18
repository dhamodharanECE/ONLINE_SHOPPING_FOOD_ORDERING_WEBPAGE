import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/home/home'
import Card from './pages/card/card'
import Placeorder from "./pages/placeorder/placeorder"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import Login from "./components/Login/Login"


const App = () => {
  const[setLogin,notsetLogin] = useState(false)
  return (
    <>
    {setLogin?<Login notsetLogin={notsetLogin}/>:<></>}
  <div className="app">
  <Navbar notsetLogin={notsetLogin}/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/" element={<Card/>}/>
    <Route path='/' element={<Placeorder/>}/>
  </Routes>
  </div>
  <Footer/>
  </> 
  )
}

export default App