import React from 'react'
import './ProductCard.css'

const ProductCard = (props) => {

  return (
    <div className='col-md-4 mb-4'>
      <div className="product-card">
        <img
          src={props.ele.image}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">{props.ele.title}</h2>
          <p className="product-category">{props.ele.category}</p>
          <p className="product-description">{props.ele.description}</p>
          <div className="product-price-rating">
            <span className="product-price">{props.ele.price}</span>
            <span className="product-rating">{props.ele.rating.rate} ★</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
