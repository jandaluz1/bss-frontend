import React from 'react';

const NBAStats = props => {
  const { stats } = props;
  return (
    <div className="playerStats">
      <div className="stat name">{stats.display_name}</div>
      <div className="stat pos">{stats.position}</div>
      <div className="stat">{stats.points}</div>
      <div className="stat">
        {stats.offensive_rebounds + stats.defensive_rebounds}
      </div>
      <div className="stat">{stats.assists}</div>
      <div className="stat">{stats.minutes}</div>
    </div>
  );
};

export default NBAStats;
