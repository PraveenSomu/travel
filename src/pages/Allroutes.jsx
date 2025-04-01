import React from 'react'
import Header from "../Components/header"
import About from "../pages/about"
import Destination from "../pages/Destination"
import Home from "../pages/Home";
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import { Route, Routes } from 'react-router-dom'


const Allroutes = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='the-map/about' element={ <About/> } />
      <Route path='the-map/destination' element={ <Destination/>} />
      <Route path='the-map/blog' element={ <Blog/> } />
      <Route path='the-map/contact' element={ <Contact/> } />
      </Routes>

    </>
  )
}

export default Allroutes;