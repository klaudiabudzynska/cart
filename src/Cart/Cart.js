import React from 'react';

import cartData from '../CartData';

function Cart() {

  return (
    <div>
      {
        cartData.getProducts().map(product => {
          return <div key={product.id}>{product.name}</div>
        })
      }
    </div>
  );
}

export default Cart;