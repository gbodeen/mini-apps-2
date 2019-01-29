import React from 'react';

const Factoid = ({ date, description, category1, category2 }) => {
  if (!date) return null;

  if (date[0] === '-') {
    date = date.slice(1) + ' BCE';
  }

  let place = null;
  if (category1 === 'By place') {
    place = category2;
  }

  return (
    <div className="factoid" key={Math.random()}>
      <div className="date">{date}</div>
      {place ? (<div className="place">{place}</div>) : null}
      <div className="description">{description}</div>
    </div>
  )
}

const History = ({ history }) => {

  return (
    <div className="history-section">
      {history.map(entry => Factoid(entry))}
    </div>
  )
}

export default History;