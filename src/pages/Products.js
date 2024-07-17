//Protected Page
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const Navigate = useNavigate()
  const data = useSelector(state => state.auth)
  const isAuthorized = data.isAuthenticated

  const [products, setProducts] = useState([])

  const getProduct= async()=>{
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data)
  }

  
  useEffect(() => {
    if (!isAuthorized) {
      Navigate("/login");
    }
    getProduct()
  },[]);

  return (
    <div>
      <h1 style={{"fontSize":"67px"}} className='text-black text-center'>Products</h1>
      <div className="container">
      <div className="row">
        {products.map((ele) => (
          <ProductCard key={ele.id} ele={ele} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Products