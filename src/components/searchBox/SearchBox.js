import React, { useState } from 'react';

import './searchBox.css';

function SearchBox({ handleSearch }) {
  const [ value, setValue ] = useState('');

  return (
    <div className="search-box">
      <input 
        className="search-box__input"
        type="text"
        placeholder="I'm looking for.."
        value={value}
        onChange={e => {
            setValue(e.target.value);
            handleSearch(e.target.value);
          }
        }
      />
      <label className="search-box__label">Search</label> 
    </div>
  );
}

export default SearchBox;