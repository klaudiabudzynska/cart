import React from 'react';

import '../../css/product.css';
import './CartItem.css';
import cartData from '../../CartData';

function CartItem(props) {

  const removeItem = () => {
    cartData.removeProduct(props.product.id);
    props.handleItemChange();
  }

  const changeAmount = (diff) => {
    cartData.updateProductAmount(props.product.id, diff)
    props.handleItemChange();
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
        <div className="CartItem__amount">
          <button 
            onClick={() => {if(props.product.amount > 0) changeAmount(-1)}}
          >-</button>
          <p>{props.product.amount}</p>
          <button 
            onClick={() => changeAmount(1)}
          >+</button>
        </div>
        <button className="CartItem__remove"onClick={removeItem}>
        <i className="material-icons">
          delete
        </i>
        </button>
      </div>
    </li>
  );
}

export default CartItem;