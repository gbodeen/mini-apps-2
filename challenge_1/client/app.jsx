import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Search from './search.jsx';


const App = () => {
  const [history, setHistory] = useState({});


  return (
    <>
      <h1>Extremely Important History</h1>
      <h2>displayed approximately</h2>
      <Search setHistory={setHistory} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


