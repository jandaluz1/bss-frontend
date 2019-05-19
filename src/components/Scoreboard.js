import React from 'react';
import PeriodScores from './PeriodScores';
import './Scoreboard.scss';

const Scoreboard = props => {
  const { homeTeam, awayTeam, homeScore, awayScore, league, status } = props;
  if (league === 'MLB') {
    var { homeHits, awayHits, homeErrors, awayErrors } = props;
  }

  return (
    <div className="scoreboard">
      <div className="header score-line">
        <div className="team" />
        {awayScore.map((score, idx) => (
          <div key={idx + 1} className="period">
            {idx + 1}
          </div>
        ))}
        {league === 'MLB' ? (
          <React.Fragment>
            <div className="period">R</div>
            <div className="period">H</div>
            <div className="period">E</div>
          </React.Fragment>
        ) : (
          <div className="period">Total</div>
        )}
      </div>
      <div className="score-line">
        <div className="team">{awayTeam.abbreviation}</div>
        <PeriodScores scores={awayScore} />
        <div className="period">{awayScore.reduce((a, b) => a + b)}</div>
        {league === 'MLB' && (
          <React.Fragment>
            <div className="period">{awayHits}</div>
            <div className="period">{awayErrors}</div>
          </React.Fragment>
        )}
      </div>
      <div className="score-line">
        <div className="team">{homeTeam.abbreviation}</div>
        <PeriodScores scores={homeScore} />
        <div className="period">{homeScore.reduce((a, b) => a + b)}</div>
        {league === 'MLB' && (
          <React.Fragment>
            <div className="period">{homeHits}</div>
            <div className="period">{homeErrors}</div>
          </React.Fragment>
        )}
      </div>
      <div className="teams-box">
        <div className="team-info">{awayTeam.full_name}</div>
        {status === 'completed' && <div className="status">Final</div>}
        <div className="team-info">{homeTeam.full_name}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
