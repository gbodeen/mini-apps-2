import React from 'react';

const PageButtons = ({ setHistory, page, setPage, searchText }) => {

  const handlePageButtonClick = (change) => {
    if (page + change > 0) {
      fetch(`events?q=${searchText}&_page=${page + change}`)
        .then(results => results.json())
        .then(json => setHistory(json))
        .then(() => setPage(page + change));
    }
  }

  return (
    <div className="page-buttons">
      <button className="prev page" type="button" onClick={() => handlePageButtonClick(-1)}>Previous Page</button>
      <button className="next page" type="button" onClick={() => handlePageButtonClick(1)}>Next Page</button>
    </div>
  )
}

export default PageButtons;