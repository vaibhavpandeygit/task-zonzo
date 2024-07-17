import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import { isAuthenticated } from '../helpFunc/isAuthenticated';


const Nav = (props,{children}) => {
  
  let isAuthorized = props.isAuthorized
  console.log(isAuthorized)

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Zonzo-Sample
          </a>
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
      {children}
    </div>
  );
}

export default Nav
