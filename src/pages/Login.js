import React, { useEffect, useState } from 'react'
import { users } from '../data'
import { token } from '../helpFunc/tokenGen'
import { useDispatch } from 'react-redux'
import { login } from '../redux/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../helpFunc/isAuthenticated'
import Nav from '../components/Nav'

const Login = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange=(e)=>{
        const {name,value} =  e.target
        setUser((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }


    const handleSubmit= (e)=>{
      e.preventDefault()

      const userFound = users.find((e)=> e.email === user.email)
      
      if(userFound){
        if(userFound.password === user.password){
          const userIndex = users.findIndex((e)=> e.email === user.email)
          users[userIndex].token = token()
          dispatch(login({
            name: users[userIndex].name,
            email: users[userIndex].email,
            phone: users[userIndex].phone,
            token: users[userIndex].token
          }))
          alert("Successfully Login")
          Navigate('/profile')
        }
        else{
          alert("Wrong email or password")
        }
      }
      else{
        alert("User not found, please register first")

      }
    }

    useEffect(()=>{
      const isAuthorized = isAuthenticated();
      if(isAuthorized){
        Navigate('/profile')
      }
    })

  return (
    
      <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <h1 style={{"fontSize":"70px","fontFamily":"playfairDisplay","fontStyle":"bold"}} className='text-center'>Login Here</h1>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
              

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="email"
                    name='email'
                    
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label">
                    Email address
                  </label>
                </div>


                <div data-mdb-input-init className="form-outline mb-3">
                  <input
                    type="password"
                    name='password'
                    
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
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Not registered?{" "}
                    <Link to='/register' className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Login
