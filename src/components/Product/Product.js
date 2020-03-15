import React from 'react';

import '../../css/product.css'
import './Product.css';
import cartData from '../../CartData';

function Product(props) {
  return (
    <div className="product product--shop">
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
          cartData.setProduct(props.product)
        }}
      >
        <span>Add to cart</span>
        <i className="material-icons">
        shopping_cart
        </i>
      </button>
    </div>
  );
}

export default Product;