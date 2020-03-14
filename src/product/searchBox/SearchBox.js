import React, { useState } from 'react';

function SearchBox() {
  const [ value, setValue ] = useState('');
  return (
    <input 
      type="text" 
      value={name} 
      onChange={e => setValue(e.value)}
    />
  );
}

export default SearchBox;