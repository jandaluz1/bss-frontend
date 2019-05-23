import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  teamInfo: {
    width: '100%',
    display: 'flex',
    height: '3rem',
    alignItems: 'center'
  },
  team: {
    width: '40%',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  status: {
    width: '20%',
    fontWeight: 'bold',
    backgroundColor: theme.palette.grey[200],
    height: '100%',
    lineHeight: '3rem',
    textAlign: 'center'
  }
}));

const Scoreboard = props => {
  const { homeTeam, awayTeam, homeScore, awayScore, league, gameInfo } = props;
  const classes = useStyles();
  if (league === 'MLB') {
    var { homeHits, awayHits, homeErrors, awayErrors } = props;
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            {scoreboardHeader(league)}

            {league === 'MLB' ? (
              <React.Fragment>
                <TableCell>R</TableCell>
                <TableCell>H</TableCell>
                <TableCell>E</TableCell>
              </React.Fragment>
            ) : (
              <TableCell>Total</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{awayTeam.abbreviation}</TableCell>
            {awayScore.map((score, idx) => (
              <TableCell key={idx}>{score !== null ? score : ' '}</TableCell>
            ))}
            <TableCell>{awayScore.reduce((a, b) => a + b)}</TableCell>
            {league === 'MLB' && (
              <React.Fragment>
                <TableCell>{awayHits}</TableCell>
                <TableCell>{awayErrors}</TableCell>
              </React.Fragment>
            )}
          </TableRow>
          <TableRow>
            <TableCell>{homeTeam.abbreviation}</TableCell>
            {homeScore.map((score, idx) => (
              <TableCell key={idx}>{score !== null ? score : ' '}</TableCell>
            ))}
            <TableCell>{homeScore.reduce((a, b) => a + b)}</TableCell>
            {league === 'MLB' && (
              <React.Fragment>
                <TableCell>{homeHits}</TableCell>
                <TableCell>{homeErrors}</TableCell>
              </React.Fragment>
            )}
          </TableRow>
        </TableBody>
      </Table>
      <div className={classes.teamInfo}>
        <div className={classes.team}>{awayTeam.last_name}</div>
        {gameInfo.status === 'completed' && (
          <div className={classes.status}>FINAL</div>
        )}
        {/* if game is in progress, return the time left, inning and outs, ect.. from the api */}
        {gameInfo.status === 'In Progress' && (
          <div className={classes.status}>{gameInfo.status}</div>
        )}
        {/* if the game hasn't started yet, return the start time for the game */}
        {gameInfo.status === 'pre-game' && (
          <div className={classes.status}>
            {getStartTime(gameInfo.start_date_time)}
          </div>
        )}
        <div className={classes.team}>{homeTeam.last_name}</div>
      </div>
    </Paper>
  );
};

const getStartTime = dateStr => {
  const date = new Date(dateStr);
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const min =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  return `${hours}:${min}`;
};

const scoreboardHeader = league => {
  switch (league) {
    case 'MLB':
      return (
        <React.Fragment>
          <TableCell>1</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
          <TableCell>4</TableCell>
          <TableCell>5</TableCell>
          <TableCell>6</TableCell>
          <TableCell>7</TableCell>
          <TableCell>8</TableCell>
          <TableCell>9</TableCell>
        </React.Fragment>
      );
    case 'NHL':
      return (
        <React.Fragment>
          <TableCell>1</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
        </React.Fragment>
      );
    default:
      return (
        <React.Fragment>
          <TableCell>1</TableCell>
          <TableCell>2</TableCell>
          <TableCell>3</TableCell>
          <TableCell>4</TableCell>
        </React.Fragment>
      );
  }
};

export default Scoreboard;
