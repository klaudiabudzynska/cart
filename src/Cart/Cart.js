import React, { useState } from 'react';

import '../css/heading.css';
import './Cart.css';
import cartData from '../CartData';
import CartItem from '../CartItem/CartItem';

function Cart() {

  const [ reload, setReload ] = useState(0);

  const handleItemRemove = () => setReload(reload + 1);

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
              handleItemRemove={handleItemRemove}
            />
          )
        })
      }
      </ul>
    </div>
  );
}

export default Cart;