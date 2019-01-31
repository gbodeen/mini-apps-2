import React from 'react';
import ReactDOM from 'react-dom';
import FrameDisplay from './frameDisplay.jsx';
import ScoreEntry from './scoreEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <FrameDisplay />
        <ScoreEntry />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
