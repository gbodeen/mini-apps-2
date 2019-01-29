import React, { useState } from 'react';

const Search = ({ setHistory }) => {
  const [text, setText] = useState('');

  const handleSearchText = (e) => {
    setText(e.target.value);
  }

  const handleSearchClick = (e) => {
    fetch(`events?q=${text}`)
      .then(results => results.json())
      .then(json => setHistory(json));
  }

  return (
    <div id="search-area">
      <input type="text" placeholder="Search..." id="searchbar" onChange={handleSearchText} />
      <button type="button" onClick={handleSearchClick}>History!</button>
    </div>
  )
}

export default Search;