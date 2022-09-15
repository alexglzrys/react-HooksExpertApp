import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg bg-light">
      <div className="container-fluid">
        {/* Navegar entre rutas */}
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/login">Login</Link> */}

            {/* Navegar entre rutas, verificando cual es la ruta activa */}
            <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/login" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Login</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
