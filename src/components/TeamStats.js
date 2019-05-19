import React from 'react';
import MLBStats from './MlbStats';
import NBAStats from './NBAStats';
import './TeamStats.scss';

const TeamStats = props => {
  const { league, stats } = props;
  if (league === 'MLB') {
    return (
      <div className="team-stats">
        <div className="stats-header">
          <div className="stat">Name</div>
          <div className="stat">Pos</div>
          <div className="stat">AB</div>
          <div className="stat">RBI</div>
          <div className="stat">HR</div>
        </div>
        {stats.map((player, idx) => (
          <MLBStats stats={player} key={idx} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="team-stats">
        <div className="stats-header">
          <div className="stat">Name</div>
          <div className="stat">Pos</div>
          <div className="stat">Pts</div>
          <div className="stat">Reb</div>
          <div className="stat">Ass</div>
          <div className="stat">Min</div>
        </div>
        {stats.map((player, idx) => (
          <NBAStats stats={player} key={idx} />
        ))}
      </div>
    );
  }
};

export default TeamStats;
