import React from 'react';
import ReactPaginate from 'react-paginate';

const PageButtons = ({ setHistory, pageCount, searchText }) => {

  const handlePageButtonClick = ({ selected }) => {
    // console.log(selected);
    fetch(`events?q=${searchText}&_page=${selected + 1}`)
      .then(results => results.json())
      .then(json => setHistory(json))
  }

  return (
    <div className="page-buttons">
      <ReactPaginate pageCount={pageCount} pageRangeDisplayed={5} marginPagesDisplayed={2} onPageChange={handlePageButtonClick} />
    </div>
  )
}

export default PageButtons;