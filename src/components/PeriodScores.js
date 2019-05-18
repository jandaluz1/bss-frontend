import React from 'react';

const PeriodScores = props => {
  const { scores } = props;
  return scores.map((score, idx) => (
    <div key={idx} className="period">
      {score}
    </div>
  ));
};

export default PeriodScores;
