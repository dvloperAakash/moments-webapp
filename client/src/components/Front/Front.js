import React from 'react';
import useStyles from './styles';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import BackgroundImageRotator from './BackgroundImageRotator';

const Front = () => {
  const classes = useStyles();
  const history = useHistory();
  const redirectToPosts = () => {
    history.push('/posts');
  };
  return (
    <div className={classes.container}>
      <BackgroundImageRotator />
      <div className={classes.buttonWrapper}>
        <Button variant="contained" className={classes.button} onClick={redirectToPosts}>
          All Posts
        </Button>
      </div>
    </div>
  )
}

export default Front;