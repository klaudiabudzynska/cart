import React from 'react';

function Product(props) {
  return (
    <div>
      {props.name} {props.price}
    </div>
  );
}

export default Product;