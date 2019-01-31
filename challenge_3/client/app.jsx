import React from 'react';
import ReactDOM from 'react-dom';
import FrameDisplay from './frameDisplay.jsx';
import ScoreEntry from './scoreEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: [],
      frames: [[], [], [], [], [], [], [], [], [], []],
      gameOn: true
    }
  }

  markPins = (n) => {
    const pins = [].concat(this.state.pins, n);
    this.setState({ pins }, () => this.fillFrames(pins));
  }

  fillFrames = (pins) => {
    const frames = [[], [], [], [], [], [], [], [], [], []];

    let f = 0, t = 0;
    for (let pin of pins) {
      if (f === 9) {
        if (frames[9].length === 0) {
          frames[9][0] = pin;
        } else if (frames[9].length === 1) {
          if (frames[9][0] < 10 && frames[9][0] + pin > 10) {
            frames[9][1] = 10 - frames[9][0];
          } else {
            frames[9][1] = pin;
          }
          if (frames[9][0] < 10 && frames[9][0] + frames[9][1] < 10) {
            this.gameOver();
            break;
          }
        } else if (frames[9].length === 2) {
          if (frames[9][1] === 10 || frames[9][0] + frames[9][1] === 10) {
            frames[9][2] = pin;
          } else if (frames[9][1] + pin > 10) {
            frames[9][2] = 10 - frames[9][1];
          } else {
            frames[9][2] = pin;
          }
          this.gameOver();
          break;
        }
      } else {
        if (t === 0 && pin === 10) {
          frames[f][0] = 10;
          f++;
        } else if (t === 0) {
          frames[f][0] = pin;
          t = 1;
        } else if (frames[f][0] + pin > 10) {
          frames[f][1] = 10 - frames[f][0];
          t = 0;
          f++;
        } else {
          frames[f][1] = pin;
          t = 0;
          f++;
        }
      }
    }

    this.setState({ frames });
  }

  gameOver = () => {
    this.setState({ gameOn: false });
  }

  resetGame = () => {
    this.setState({ pins: [], gameOn: true });
  }

  render() {
    return (
      <>
        <FrameDisplay frames={this.state.frames} />
        <ScoreEntry gameOn={this.state.gameOn} markPins={this.markPins} gameOver={this.gameOver} resetGame={this.resetGame} />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
