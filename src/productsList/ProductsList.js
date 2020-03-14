import React, { useState, useEffect } from 'react';

import './productsList.css';
import Product from '../product/Product';

function ProductsList() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://www.reasonapps.pl/data.json')
    .then(res => res.json())
    .then(res => {
      setProducts(res);
    })
  }, [])

  return (
    <div className="products-container">
      <h1>Our products</h1>
      <div className="products-container__list">
        {products.map(product => <Product key={product.id} name={product.name} price={product.price}/>)}
      </div>
    </div>
  );
}

export default ProductsList;