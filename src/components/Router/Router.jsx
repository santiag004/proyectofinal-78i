import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../views/home/Home'
import Registro from '../registro/Registro'
import ViewAdminUsers from '../../views/viewsadmin/ViewAdminUsers'
import ViewAdminClasses from '../../views/viewsadmin/ViewAdminClasses'
import ViewAdminServices from '../../views/viewsadmin/ViewAdminServices'
import About from '../../views/About/About'
import ViewError404 from '../../views/error404/ViewError404'
import ViewContacto from '../../views/viewcontacto/ViewContacto'
import PaginaDetalles from '../../views/detalles/PaginaDetalles'
import Classes from '../../views/Classes/Classes'
import LoginView from '../../views/login/LoginView'

const Router = () => {
  const userLoggeado = JSON.parse(localStorage.getItem("user"));

  return (
    <>

    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginView />} />
        <Route path="/*" element={<ViewError404 />} />
        <Route path='/registro'  element={<Registro/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/contacto'  element={<ViewContacto/>} />
        <Route path='/detalles'  element={<PaginaDetalles/>} />
        {userLoggeado && userLoggeado.admin ? (
          <>
          <Route path="/admin_users" element={<ViewAdminUsers />} />
          <Route path="/admin_classes" element={<ViewAdminClasses />} />
          <Route path="/admin_services" element={<ViewAdminServices />} />
          </>
        ) : null}
        {userLoggeado ? (
          <Route path="/clases" element={<Classes/>} />
        ) : null}
    </Routes>

    </>
  )
}

export default Router