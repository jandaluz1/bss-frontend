import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tableBody: {
    '&:nth-Child(odd)': {
      backgroundColor: theme.palette.grey[100]
    }
  }
}));

const NBAStats = props => {
  const { stats } = props;
  const classes = useStyles();
  return (
    <TableBody className={classes.tableBody}>
      <TableRow>
        <TableCell>{stats.display_name}</TableCell>
        <TableCell>{stats.position}</TableCell>
        <TableCell>{stats.points}</TableCell>
        <TableCell>
          {stats.offensive_rebounds + stats.defensive_rebounds}
        </TableCell>
        <TableCell>{stats.assists}</TableCell>
        <TableCell>{stats.minutes}</TableCell>
      </TableRow>
    </TableBody>
    // <div className="playerStats">
    //   <div className="stat name">{stats.display_name}</div>
    //   <div className="stat pos">{stats.position}</div>
    //   <div className="stat">{stats.points}</div>
    //   <div className="stat">
    //     {stats.offensive_rebounds + stats.defensive_rebounds}
    //   </div>
    //   <div className="stat">{stats.assists}</div>
    //   <div className="stat">{stats.minutes}</div>
    // </div>
  );
};

export default NBAStats;
