import React from 'react';
import { Link } from 'react-router-dom';
import ProductsList from '../productsList/ProductsList';

function MainPage() {
  return (
    <div>
      <Link to="/chart">chart</Link>
      <ProductsList />
    </div>
  );
}

export default MainPage;