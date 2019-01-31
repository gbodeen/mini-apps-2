import React from 'react';
import ReactDOM from 'react-dom';
import FrameDisplay from './frameDisplay.jsx';
import ScoreEntry from './scoreEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      pins: [],
      frames: [[], [], [], [], [], [], [], [], [], []],
      gameOn: true,
      score: 0
    }
    this.state = {
    }
  }

  markPins = (n) => {
    const pins = [].concat(this.state.pins, n);
    this.setState({ pins }, this.fillFrames);
  }

  fillFrames = () => {
    const pins = this.state.pins;
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
          } else {
            frames[9][2] = Math.min(pin, 10 - frames[f][1]);
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
        } else {
          frames[f][1] = Math.min(pin, 10 - frames[f][0]);
          t = 0;
          f++;
        }
      }
    }

    this.setState({ frames }, this.calculateScore);
  }

  calculateScore = () => {
    let pinsSeen = 0;
    let score = 0;
    const pins = this.state.pins;
    const frames = this.state.frames;
    for (let i = 0; i < 10; i++) {
      if (frames[i][0] === 10) {
        pinsSeen++;
        score += 10 + (pins[pinsSeen] || 0) + (pins[pinsSeen + 1] || 0);
      } else if (frames[i][1] && frames[i][0] + frames[i][1] === 10) {
        pinsSeen += 2;
        score += 10 + (pins[pinsSeen] || 0);
      } else if (frames[i][1]) {
        score += frames[i][0] + frames[i][1];
        pinsSeen += 2;
      } else if (frames[i][0]) {
        score += frames[i][0];
        pinsSeen++;
      }
    }
    this.setState({ score });
  }

  gameOver = () => {
    this.setState({ gameOn: false });
  }

  resetGame = () => {
    this.setState(this.initialState);
  }

  componentDidMount() {
    this.setState(this.initialState);
  }

  render() {
    return (
      <>
        <FrameDisplay frames={this.state.frames} score={this.state.score} />
        <ScoreEntry gameOn={this.state.gameOn} markPins={this.markPins} resetGame={this.resetGame} />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
