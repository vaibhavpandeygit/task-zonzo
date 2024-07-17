import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RouteProtected = ({children}) => {
    const Navigate = useNavigate()

    useEffect(()=>{
        const auth = JSON.parse(localStorage.getItem('user'))
        if(!auth || !auth.token){
            Navigate('/register')
        }
    },[])
  return (
    <>{children}</>
  )
}

export default RouteProtected