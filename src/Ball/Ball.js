import React, { Component } from 'react';
import './Ball.css';

const buttonStyles = {
  margin: '40px',
  padding: '15px',
  border: '5px solid steelblue',
  fontSize: '15px',
  fill: 'lightgrey',
};

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0, circleBckground: 'rgb(166, 148, 156)'};
  }
    changeNumber = () => {
    this.setState({clicks: this.state.clicks + 1});
    var color = this.state.circleBckground;
    if (color === "rgb(36, 137, 230)"){
      this.setState({circleBckground: "rgb(218, 22, 39)"});
  } else {
    this.setState({circleBckground: "rgb(36, 137, 230)"});
  };
  }
  removeOne = () => {
    if (this.state.clicks > 0){
      this.setState({clicks: this.state.clicks - 1});
    }
    var color = this.state.circleBckground;
    if (color === "rgb(36, 137, 230)"){
      this.setState({circleBckground: "rgb(218, 22, 39)"});
  } else {
    this.setState({circleBckground: "rgb(36, 137, 230)"});
  }
};
  resetState = () => {
          this.setState({clicks: 0, circleBckground: 'rgb(166, 148, 156)'}
          );
      }

  render() {
    return (
      <div className="Ball"><h2>Class</h2>
      <div id='circle' style={{background: this.state.circleBckground}}><p>{this.state.clicks}</p></div>
        <button style={buttonStyles} onClick={this.resetState}>RESET</button>
        <button style={buttonStyles} onClick={this.changeNumber}>ADD</button>
        <button style={buttonStyles} onClick={this.removeOne}>REMOVE</button>
      </div>

    );
  }
}

export default Ball;
