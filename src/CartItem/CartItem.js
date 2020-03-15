import React from 'react';

import '../css/product.css';
import './CartItem.css';
import cartData from '../CartData';

function CartItem(props) {

  const removeItem = () => {
    cartData.removeProduct(props.product.id);
    props.handleItemRemove();
  }

  return (
    <li className="CartItem product">
      <p className="product__name">
        {props.product.name}
      </p>
      <div className="CartItem__details">
        <div className="product__price">
          <p>{props.product.price}</p>
          <span>PLN</span>
        </div>
        <p>{props.product.count}</p>
        <button onClick={removeItem}>
        <i class="material-icons">
          delete
        </i>
        </button>
      </div>
    </li>
  );
}

export default CartItem;