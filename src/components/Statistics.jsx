export const Statistics = ({
  allStates,
  countTotalFeedback,
  positivePercentage,
}) => (
  <>
    {Object.entries(allStates).map(el => {
      return (
        <span key={el[0]}>
          {el[0]}: {el[1]}
        </span>
      );
    })}

    <span>Total: {countTotalFeedback}</span>
    <span>
      Positive Feedback:
      {positivePercentage}%
    </span>
  </>
);
