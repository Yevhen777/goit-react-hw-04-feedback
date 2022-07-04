import React, { Component } from 'react';
import { Buttons } from 'components/Buttons';

export class App extends Component {
  state = {
    good: 5,
    neutral: 2,
    bad: 3,
  };
  handleBtn = value => {
    this.setState({
      [value]: this.state[value] + 1,
    });
    console.log('this.state :>> ', this.state);
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, number) => {
      return acc + number;
    }, 0);
  countPositiveFeedbackPercentage = () => {
    const factor = this.countTotalFeedback() / this.state.good;
    const resultPercentages = 100 / factor;
    return Math.round(resultPercentages);
  };

  render() {
    return (
      <>
        <p>Please leave feedback</p>
        <Buttons state={this.state} handleBtn={this.handleBtn} />

        <p>Statistics</p>
        {Object.entries(this.state).map(el => {
          return (
            <span key={el[0]}>
              {el[0]}: {el[1]}
            </span>
          );
        })}

        <span>Total: {this.countTotalFeedback()}</span>
        <span>
          Positive Feedback:
          {this.countPositiveFeedbackPercentage()}%
        </span>
      </>
    );
  }
}
