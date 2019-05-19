import React from 'react';
import TeamStats from './TeamStats';
import './Statsbox.scss';

const Statsbox = props => {
  const { homeStats, awayStats, league } = props;
  console.log(league);
  return (
    <div className="container">
      <TeamStats stats={awayStats} league={league} />
      <TeamStats stats={homeStats} league={league} />
    </div>
  );
};

export default Statsbox;
