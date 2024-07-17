import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Nav = () => {

  const Navigate = useNavigate()

  const data = useSelector(state => state.auth)
  var isAuthorized = data.isAuthenticated


  return (
    <div>
      <nav className="navbar p-3 navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" href="#">
            Zonzo-Sample
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

             { !isAuthorized && (<Link to='/login' className="nav-link" href="#">
                Login
              </Link>)}


              {isAuthorized && (<Link to='/products' className="nav-link" href="#">
                Products
              </Link>)}


              {isAuthorized && (<Link to='/profile' className="nav-link" href="#">
                Profile
              </Link>)}

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav
