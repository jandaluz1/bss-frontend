import React from 'react';

const PeriodScores = props => {
  const { scores } = props;
  return scores.map(score => <div className="period">{score}</div>);
};

export default PeriodScores;
