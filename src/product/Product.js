import React from 'react';

import './product.css';
import chartData from '../ChartData';

function Product(props) {
  return (
    <div className="product">
      <div className="product__descripton">
        <p className="product__name">
          {props.product.name}
        </p>
        <div className="product__price">
          <p>{props.product.price}</p>
          <span>PLN</span>
        </div>
      </div>
      <button 
        className="product__cta" 
        onClick={() => {
          chartData.getProducts()
          chartData.setProduct(props.product)
        }}
      >
        <span>Add to chart</span>
        <i className="material-icons">
        shopping_cart
        </i>
      </button>
    </div>
  );
}

export default Product;