import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function CopyButton({ handleApplyNext }) {
  const useStyles = makeStyles({
    button: {
      backgroundColor: 'white',
    },
  });
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={handleApplyNext}
      color="default"
    >
      Next
    </Button>
  );
}

export default CopyButton;
