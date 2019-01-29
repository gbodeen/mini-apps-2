import React, { useState } from 'react';

const Search = ({ setHistory, setPage, searchText, setSearchText }) => {

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  }

  const handleSearchClick = () => {
    fetch(`events?q=${searchText}&_page=1`)
      .then(results => results.json())
      .then(json => setHistory(json))
      .then(() => setPage(1));
  }

  const handleKeyPress = (e) => {
    if (e.key == 'Enter') handleSearchClick();
  }

  return (
    <div id="search-area">
      <input type="text" placeholder="Search..." id="searchbar" onChange={handleSearchText} onKeyPress={handleKeyPress} autoFocus />
      <button type="button" onClick={handleSearchClick}>History!</button>
    </div>
  )
}

export default Search;