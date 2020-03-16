import React from 'react';
import { Link } from 'react-router-dom';

import './MainPage.css';
import ProductsList from '../ProductsList/ProductsList';

function MainPage() {
  return (
    <div className="MainPage">
      <Link className="MainPage__cartLink" to="/cart">cart</Link>
      <ProductsList />
    </div>
  );
}

export default MainPage;