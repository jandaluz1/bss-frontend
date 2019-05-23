import React from 'react';
import TeamStats from './TeamStats';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  }
}));

const Statsbox = props => {
  const { homeStats, awayStats, league } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TeamStats stats={awayStats} league={league} />
      <TeamStats stats={homeStats} league={league} />
    </div>
  );
};

export default Statsbox;
