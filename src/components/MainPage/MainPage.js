import React from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';

function MainPage() {
  return (
    <div>
      <Link to="/cart">cart</Link>
      <ProductsList />
    </div>
  );
}

export default MainPage;