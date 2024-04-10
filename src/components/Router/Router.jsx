import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../views/home/Home'
import Login from '../../views/login/Login'
import Registro from '../registro/Registro'
import ViewAdmin from '../../views/viewsadmin/ViewAdmin'
import About from '../../views/About/About'
import ViewError404 from '../../views/error404/ViewError404'
import ViewContacto from '../../views/viewcontacto/ViewContacto'

const Router = () => {
  return (
    <>

    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ViewError404 />} />
        <Route path='/registro'  element={<Registro/>} />
        <Route path='/admin'  element={<ViewAdmin/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/contacto'  element={<ViewContacto/>} />
    </Routes>

    </>
  )
}

export default Router