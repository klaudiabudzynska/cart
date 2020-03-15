import React, { useState } from 'react';

import '../css/heading.css';
import './Cart.css';
import cartData from '../CartData';
import CartItem from '../CartItem/CartItem';

function Cart() {

  const [ reload, setReload ] = useState(0);

  const handleItemChange = () => setReload(reload + 1);

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <ul className="Cart__list">
      {
        cartData.getProducts().map(product => {
          return (
            <CartItem 
              key={product.id} 
              product={product} 
              handleItemChange={handleItemChange}
            />
          )
        })
      }
      </ul>
      <div className="Cart__summary">
        <p>Total:</p>
        <div className="summary__price">
          <p>{cartData.getTotalPrice()}</p>
          <span>PLN</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;