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

const MLBStats = props => {
  const { stats } = props;
  const classes = useStyles();
  return (
    <TableBody className={classes.tableBody}>
      <TableRow>
        <TableCell>{stats.display_name}</TableCell>
        <TableCell>{stats.position}</TableCell>
        <TableCell>
          {stats.hits}-{stats.at_bats}
        </TableCell>
        <TableCell>{stats.rbi}</TableCell>
        <TableCell>{stats.home_runs}</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default MLBStats;
