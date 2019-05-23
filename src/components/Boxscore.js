import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import StatsBox from './Statsbox';
import axios from 'axios';

class Boxscore extends Component {
  async componentDidMount() {
    const { id } = this.props;
    console.log(id);
    const { data } = await axios.get(`/api/${id}`);
    console.log(data);
    this.setState({ ...data.stats });
    this.poll();
  }

  poll() {
    console.log('POLLING');
    const { id } = this.props;
    setTimeout(async () => {
      const { data } = await axios.get(`/api/${id}`);
      this.setState({ ...data });
      this.poll();
    }, 15000);
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
              gameInfo={event_information}
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
              gameInfo={event_information}
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
