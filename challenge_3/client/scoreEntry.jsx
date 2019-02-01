import React from 'react';

class ScoreEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hit: null
    };
  }

  handleNewGameClick = this.props.resetGame;

  handleNumClick = (e) => {
    this.setState({ hit: parseInt(e.target.innerText) });
  }

  handleConfirmClick = () => {
    const { markPins } = this.props;
    const hit = this.state.hit;
    if (hit !== null) {
      markPins(hit);
    }
    this.setState({ hit: null });
  }


  render() {
    const { gameOn } = this.props;

    if (gameOn) {
      return (
        <div className="score-pad">
          <div className="row row-0">
            <button type="button" className="button" id="button-0" onClick={this.handleNumClick} >0</button>
          </div>
          <div className="row row-1">
            <button type="button" className="button" id="button-1" onClick={this.handleNumClick} >1</button>
            <button type="button" className="button" id="button-2" onClick={this.handleNumClick} >2</button>
            <button type="button" className="button" id="button-3" onClick={this.handleNumClick} >3</button>
          </div>
          <div className="row row-2">
            <button type="button" className="button" id="button-4" onClick={this.handleNumClick} >4</button>
            <button type="button" className="button" id="button-5" onClick={this.handleNumClick} >5</button>
            <button type="button" className="button" id="button-6" onClick={this.handleNumClick} >6</button>
          </div>
          <div className="row row-3">
            <button type="button" className="button" id="button-7" onClick={this.handleNumClick} >7</button>
            <button type="button" className="button" id="button-8" onClick={this.handleNumClick} >8</button>
            <button type="button" className="button" id="button-9" onClick={this.handleNumClick} >9</button>
          </div>
          <div className="row row-4">
            <button type="button" className="button" id="button-10" onClick={this.handleNumClick} >10</button>
          </div>
          <button type="button" className="confirm" onClick={this.handleConfirmClick} >Confirm {this.state.hit}</button>
        </div>
      )
    } else {
      return (
        <button type="button" onClick={this.handleNewGameClick} >New Game!</button>
      )
    }

  }
}

export default ScoreEntry;