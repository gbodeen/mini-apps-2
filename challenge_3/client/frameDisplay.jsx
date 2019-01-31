import React from 'react';

class FrameDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: []
    }
  }

  // props has gameOver() and Pins

  endGame = this.props.gameOver;

  render() {
    return (
      <div className="score-frames">The frames with scores will go here.</div>
    )
  }
}

export default FrameDisplay;