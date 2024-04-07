import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../views/home/Home'
import Login from '../../views/login/Login'
import Registro from '../registro/Registro'

const Rutas = () => {
  return (
    <>
    
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
        <Route path='/registro'  element={<Registro/>} />
    </Routes>

    </>
  )
}

export default Rutas