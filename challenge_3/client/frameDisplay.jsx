import React from 'react';

const FrameDisplay = ({ frames, score }) => {

  return (
    <div className="frame-display">
      {
        frames.map((frame, i) => {
          return <div className="frame" key={i}>{frame.toString()}</div>
        })
      }
      <div className="score">{score}</div>
    </div>
  )
}

export default FrameDisplay;