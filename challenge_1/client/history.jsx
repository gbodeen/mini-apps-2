import React from 'react';
import Factoid from './factoid.jsx';

const History = ({ history }) => {

  return (
    <div className="history-section">
      {history.map(entry => Factoid(entry))}
    </div>
  )
}

export default History;