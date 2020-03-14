import React from 'react';

import './product.css';

function Product(props) {
  return (
    <div className="product">
      <div className="product__descripton">
        <p className="product__name">
          {props.name}
        </p>
        <div className="product__price">
          <p>{props.price}</p>
          <span>PLN</span>
        </div>
      </div>
      <button className="product__cta">
        <span>Add to chart</span>
        <i className="material-icons">
        shopping_cart
        </i>
      </button>
    </div>
  );
}

export default Product;