import React from 'react'
import { NavLink } from 'react-router-dom'

function Header () {
  return (
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-xxl">
              <a className="navbar-brand" href="#">Coffee Soul</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink exact={true}  activeClassName='active' className='nav-link' aria-current="page" to='/'>Home</NavLink>
                  <NavLink className="nav-link" to='/features'>Меню</NavLink>
                  <NavLink className="nav-link" to='menu'>О нас</NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
  )
}

export default Header