import React from 'react';
import MLBStats from './MlbStats';
import NBAStats from './NBAStats';
import { makeStyles } from '@material-ui/core/styles';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  teamStatsContainer: {
    width: '50%',
    marginTop: '1rem'
  }
}));

const TeamStats = props => {
  const { league, stats } = props;
  const classes = useStyles();
  return (
    <Paper className={classes.teamStatsContainer}>
      <Table>
        <TableHead>
          {league === 'MLB' && (
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Pos</TableCell>
              <TableCell>AB</TableCell>
              <TableCell>RBI</TableCell>
              <TableCell>HR</TableCell>
            </TableRow>
          )}
          {league === 'NBA' && (
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Pos</TableCell>
              <TableCell>Pts</TableCell>
              <TableCell>Reb</TableCell>
              <TableCell>Ass</TableCell>
              <TableCell>Min</TableCell>
            </TableRow>
          )}
        </TableHead>
        {league === 'MLB' &&
          stats.map((player, idx) => <MLBStats stats={player} key={idx} />)}
        {league === 'NBA' &&
          stats.map((player, idx) => <NBAStats stats={player} key={idx} />)}
      </Table>
    </Paper>
  );
  // if (league === 'MLB') {
  //   return (
  //     <div className="team-stats">
  //       <div className="stats-header">
  //         <div className="stat">Name</div>
  //         <div className="stat">Pos</div>
  //         <div className="stat">AB</div>
  //         <div className="stat">RBI</div>
  //         <div className="stat">HR</div>
  //       </div>
  //       {stats.map((player, idx) => (
  //         <MLBStats stats={player} key={idx} />
  //       ))}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="team-stats">
  //       <div className="stats-header">
  //         <div className="stat">Name</div>
  //         <div className="stat">Pos</div>
  //         <div className="stat">Pts</div>
  //         <div className="stat">Reb</div>
  //         <div className="stat">Ass</div>
  //         <div className="stat">Min</div>
  //       </div>
  //       {stats.map((player, idx) => (
  //         <NBAStats stats={player} key={idx} />
  //       ))}
  //     </div>
};

export default TeamStats;
