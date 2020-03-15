import React, { useState, useEffect } from 'react';

import '../css/heading.css';
import './productsList.css';
import Product from '../product/Product';
import SearchBox from '../searchBox/SearchBox';

function ProductsList() {
  const [ products, setProducts ] = useState([]);
  const [ productsList, setProductsList ] = useState([]);
  const [ filter, setFilter ] = useState('');

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://www.reasonapps.pl/data.json')
    .then(res => res.json())
    .then(res => {
      setProducts(res);
    })
  }, [])

  useEffect(() => {
    let list = [];
    
    products.filter(product => {
      const reg = new RegExp(`\w*${filter}`, 'gi')
      if(reg.test(product.name)){
        list.push(
          <Product key={product.id} product={product}/>
        )
      }
    })
    
    setProductsList(list)
  }, [products, filter])

  const handleSearch = (value) => {
    setFilter(value);
  }

  return (
    <div className="products-container">
      <h1>Our products</h1>
      <SearchBox handleSearch={handleSearch}/>
      <div className="products-container__list">
        {productsList}
      </div>
    </div>
  );
}

export default ProductsList;