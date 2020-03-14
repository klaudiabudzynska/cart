import React, { useState } from 'react';

function SearchBox({ handleSearch }) {
  const [ value, setValue ] = useState('');

  return (
    <input 
      type="text"
      value={value}
      onChange={e => {
          setValue(e.target.value);
          handleSearch(e.target.value);
        }
      }
    />
  );
}

export default SearchBox;