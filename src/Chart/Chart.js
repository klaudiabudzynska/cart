import React from 'react';

import chartData from '../ChartData';

function Chart() {

  return (
    <div>
      {
        chartData.getProducts().map(product => {
          return <div key={product.id}>{product.name}</div>
        })
      }
    </div>
  );
}

export default Chart;