import React, { Component } from 'react';

const Buttons = ({ state, handleBtn }) => (
  <>
    {Object.keys(state).map(el => (
      <button key={el} onClick={() => handleBtn(el)}>
        {el}
      </button>
    ))}
  </>
);

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleBtn = value => {
    this.setState({
      [value]: this.state[value] + 1,
    });
    console.log('this.state :>> ', this.state);
  };

  render() {
    return (
      <>
        <p>Please leave feedback</p>
        <Buttons state={this.state} handleBtn={this.handleBtn}></Buttons>

        {/* <button onClick={this.good}>Show</button> */}
      </>
    );
  }
}
