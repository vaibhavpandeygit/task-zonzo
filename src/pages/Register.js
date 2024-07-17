import React, { useEffect, useState } from 'react'
import './CSS/Register.css'
import { users } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../helpFunc/isAuthenticated'
import Nav from '../components/Nav'

const Register = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const [user,setUser] = useState({
    name: "",
    email: "",
    designation: "",
    about: "",
    phone: "",
    password: "",
    token: ""
  })

  const handleChange=(e)=>{
    const {name, value} = e.target
    setUser((prevData)=>({
      ...prevData,
      [name] : value
    }))
  }
  
  const handleSubmit = (event)=>{
    event.preventDefault();

    const findUser = users.find((e)=>user.email == e.email)

    if(!findUser){
      dispatch(register(user))
      alert("User Registered Successfully")
    }
    else if(findUser){
      alert("User allready registered")
    }

    Navigate('/login')
  }
  const isAuthorized = isAuthenticated()
  useEffect(()=>{  
    if(isAuthorized){
      Navigate('/profile')
    }
  })
  return (
     <div className='container m-5'>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <h1 style={{"fontSize":"70px","fontFamily":"playfairDisplay","fontStyle":"bold"}} className='text-center'>Register Here</h1>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
              <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    name='name'
                    required
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your name"
                  />
                  <label className="form-label">
                    Your Name
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    name='email'
                    required
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label">
                    Email address
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    name='designation'
                    required
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Ex - Web Developer"
                  />
                  <label className="form-label">
                    Designation
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    name='about'
                    required
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="ex - I like to work at very calm and nice place"
                  />
                  <label className="form-label">
                    About
                  </label>
                </div>


                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="tel"
                    name='phone'
                    required
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid phone number"
                  />
                  <label className="form-label">
                    Phone
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-3">
                  <input
                    type="password"
                    name='password'
                    required
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label">
                    Password
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg"
                    style={{
                      "paddingLeft": "2.5rem",
                      "paddingRight": "2.5rem",
                    }}
                  >
                    Register
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already registered?{" "}
                    <Link to='/login' className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register
