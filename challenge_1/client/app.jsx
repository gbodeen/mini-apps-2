import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';
import History from './history.jsx';
import PageButtons from './pagebuttons.jsx';

const App = () => {
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <h1>Extremely Important History</h1>
      <h2>displayed approximately</h2>
      <Search setHistory={setHistory} setPage={setPage} searchText={searchText} setSearchText={setSearchText} />
      <History history={history} />
      <PageButtons setHistory={setHistory} page={page} setPage={setPage} searchText={searchText} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


