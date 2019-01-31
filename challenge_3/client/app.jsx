import React from 'react';
import ReactDOM from 'react-dom';
import FrameDisplay from './frameDisplay.jsx';
import ScoreEntry from './scoreEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: []
    }
  }

  markPins = (n) => {
    const pins = [].concat(this.state.pins, n);
    this.setState({ pins });
  }

  gameOn = () => {
    return this.state.pins.length < 10;
  }

  resetGame = () => {
    this.setState({ pins: [] });
  }

  render() {
    return (
      <>
        <FrameDisplay pins={this.state.pins} />
        <ScoreEntry gameOn={this.gameOn} markPins={this.markPins} resetGame={this.resetGame} />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
