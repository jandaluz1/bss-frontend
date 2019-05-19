import React from 'react';
import './MLBStats.scss';

const MLBStats = props => {
  const { stats } = props;
  return (
    <div className="playerStats">
      <div className="stat name">{stats.display_name}</div>
      <div className="stat pos">{stats.position}</div>
      <div className="stat">
        {stats.hits}-{stats.at_bats}
      </div>
      <div className="stat">{stats.rbi}</div>
      <div className="stat">{stats.home_runs}</div>
    </div>
  );
};

export default MLBStats;
