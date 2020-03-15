import React from 'react';

import chartData from '../ChartData';

function Chart() {

  return (
    <div>
      {
        chartData.getProducts().map(product => {
          console.log(product);
          return <div>{product.name}</div>
        })
      }
    </div>
  );
}

export default Chart;