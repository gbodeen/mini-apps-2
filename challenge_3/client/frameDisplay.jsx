import React from 'react';

class FrameDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: []
    }
  }

  render() {
    return (
      <div className="score-frames">The frames with scores will go here.</div>
    )
  }
}

export default FrameDisplay;