import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/NavBar'
import { UserProvider } from './context/userProvider'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

export const MainApp = () => {
  return (
    // Compartir la información que proveé el UserContext,
    // Generalmente cuando se desea compartir un contexto, este se debe declara lo más arriba posible en el arbol de componentes que desean tener acceso a dicho valor
    <UserProvider>
        {/* Los hijos que tendran acceso al contexto */}
        <h1>Main App - useContext</h1>
        <Navbar />
        <hr />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            {/* Si la ruta no se encuentra, se redirecciona la ruta de /about */}
            <Route path='*' element={<Navigate to='/about' />} />
        </Routes>

    </UserProvider>
  )
}
