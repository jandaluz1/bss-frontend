import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import StatsBox from './Statsbox';

class Boxscore extends Component {
  componentDidMount() {
    const data = require('../data/nba.json');
    console.log(data);
    this.setState({ ...data });
  }
  render() {
    if (this.state) {
      const {
        home_team,
        away_team,
        home_period_scores,
        away_period_scores,
        league,
        event_information
      } = this.state;
      if (this.state.league === 'MLB') {
        const {
          home_batter_totals,
          away_batter_totals,
          home_batters,
          away_batters,
          home_errors,
          away_errors
        } = this.state;
        return (
          <React.Fragment>
            <Scoreboard
              league={league}
              homeTeam={home_team}
              awayTeam={away_team}
              homeScore={home_period_scores}
              awayScore={away_period_scores}
              homeHits={home_batter_totals.hits}
              awayHits={away_batter_totals.hits}
              homeErrors={home_errors}
              awayErrors={away_errors}
              status={event_information.status}
            />
            <StatsBox
              homeStats={home_batters}
              awayStats={away_batters}
              league={league}
            />
          </React.Fragment>
        );
      } else {
        const { home_stats, away_stats } = this.state;
        return (
          <React.Fragment>
            <Scoreboard
              league={league}
              homeTeam={home_team}
              awayTeam={away_team}
              homeScore={home_period_scores}
              awayScore={away_period_scores}
              status={event_information.status}
            />
            <StatsBox
              homeStats={home_stats}
              awayStats={away_stats}
              league={league}
            />
          </React.Fragment>
        );
      }
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default Boxscore;
