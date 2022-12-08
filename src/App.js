import React from 'react'
import Navbar from './components/Navbar'
import './components/index.css'
import {
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home'
import Accessories from './components/Accessories'
import Mobile from './components/Mobile'
import Contact from './components/Contact'
import Banner from './components/Banner'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Banner/>
    </>
  )
}

export default App