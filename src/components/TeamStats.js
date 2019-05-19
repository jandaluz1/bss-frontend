import React from 'react';
import MLBStats from './MlbStats';
import './TeamStats.scss';

const TeamStats = props => {
  const { league, stats } = props;
  console.log(league);
  if (league === 'MLB') {
    return (
      <div className="team-stats">
        <div className="header">
          <div className="stat">Name</div>
          <div className="stat">Pos</div>
          <div className="stat">AB</div>
          <div className="stat">RBI</div>
          <div className="stat">HR</div>
        </div>
        {stats.map(player => (
          <MLBStats stats={player} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default TeamStats;
