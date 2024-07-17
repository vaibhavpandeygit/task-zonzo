//Protected Page

import React from 'react'
import ProductCard from '../components/ProductCard'
import Nav from '../components/Nav'
import axios from 'axios'

const Products = () => {

  const getProduct=()=>{
    const response = axios.get('https://fakestoreapi.com/products');
    console.log(response.data)
  }
  
  return (
      <div className="container">
        <ProductCard />
      </div>
  );
}

export default Products