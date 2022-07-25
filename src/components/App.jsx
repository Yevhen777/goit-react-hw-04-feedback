import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Options.module.css';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';
import { Section } from 'components/Section';

export class App extends Component {
  state = {
    cons: {},
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
      <div className={style.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions state={this.state} handleBtn={this.handleBtn} />
          <h3>Statistics</h3>

          {this.countTotalFeedback() ? (
            <Statistics
              allStates={this.state}
              countTotalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  state: PropTypes.object,
  handleBtn: PropTypes.func,
};

Statistics.propTypes = {
  allStates: PropTypes.object,
  countTotalFeedback: PropTypes.number,
  positivePercentage: PropTypes.number,
};
