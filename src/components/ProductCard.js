import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="ibox">
                <div className="ibox-content product-box">
                  <div className="product-imitation">[ INFO ]</div>
                  <div className="product-desc">
                    <span className="product-price">$10</span>
                    <small className="text-muted">Category</small>
                    <a href="#/" className="product-name">
                      {" "}
                      Product
                    </a>

                    <div className="small m-t-xs">
                      Many desktop publishing packages and web page editors now.
                    </div>
                    <div className="m-t text-righ">
                      <a
                        href="#/"
                        className="btn btn-xs btn-outline btn-primary"
                      >
                        Info <i className="fa fa-long-arrow-right"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProductCard
