import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Deportes</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/Login">Login</NavLink></li>            
            <li className="nav-item"><NavLink className="nav-link" to="/NBA">NBA</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/NFL">NFL</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/MLB">MLB</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/UFC">UFC</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <Outlet />
      </div>

      <footer className="bg-dark text-light text-center py-3 fixed-bottom">
        Rodrigo Garza 
      </footer>
    </div>
  )
}
