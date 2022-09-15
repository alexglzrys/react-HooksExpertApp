import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/NavBar'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

export const MainApp = () => {
  return (
    <>
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
    </>
  )
}
