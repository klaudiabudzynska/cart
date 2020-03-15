import React from 'react';

import '../css/heading.css';
import './Cart.css';
import cartData from '../CartData';
import CartItem from '../CartItem/CartItem';

function Cart() {

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <ul className="Cart__list">
      {
        cartData.getProducts().map(product => {
          return <CartItem key={product.id} product={product} />
        })
      }
      </ul>
    </div>
  );
}

export default Cart;