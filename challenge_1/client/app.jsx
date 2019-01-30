import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';
import History from './history.jsx';
import PageButtons from './pagebuttons.jsx';

const App = () => {
  const [history, setHistory] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [pageCount, setPageCount] = useState(1);

  const getPageCount = () => {
    if (searchText) {
      fetch(`events?q=${searchText}`)
        .then(results => results.json())
        .then(json => setPageCount(Math.ceil(json.length / 10)));
    }
  }

  return (
    <>
      <h1>Extremely Important History</h1>
      <Search setHistory={setHistory} searchText={searchText} setSearchText={setSearchText} getPageCount={getPageCount} />
      <History history={history} />
      <PageButtons setHistory={setHistory} pageCount={pageCount} searchText={searchText} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


