import React from 'react';
import './SearchBox.css';

const SearchBox = React.memo(({ placeholder, handleChange }) => {
  console.log('search box rendering');
  return (
    <input
      className="SearchBox"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
});

export default SearchBox;
