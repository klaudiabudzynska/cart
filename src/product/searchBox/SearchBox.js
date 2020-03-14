import React, { useState } from 'react';

function SearchBox() {
  const [ value, setValue ] = useState('');
  return (
    <input 
      type="text" 
      value={value} 
      onChange={e => setValue(e.value)}
    />
  );
}

export default SearchBox;