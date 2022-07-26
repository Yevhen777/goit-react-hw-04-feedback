import { useState } from 'react';

import PropTypes from 'prop-types';
import style from './Options.module.css';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';
import { Section } from 'components/Section';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtn = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const factor = countTotalFeedback() / good;
    const resultPercentages = 100 / factor;
    return Math.round(resultPercentages);
  };

  return (
    <div className={style.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions state={{ good, neutral, bad }} handleBtn={handleBtn} />
        <h3>Statistics</h3>

        {countTotalFeedback() ? (
          <Statistics
            allStates={{ good, neutral, bad }}
            countTotalFeedback={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
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
