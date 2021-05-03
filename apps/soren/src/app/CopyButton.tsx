import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function CopyButton({ handleCopyText, isCopied }) {
  const useStyles = makeStyles({
    button: {
      backgroundColor: 'white',
    },
  });
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={handleCopyText}
      data-testid="copy-button"
      color="default"
    >
      {isCopied ? 'Copied' : 'Copy'}
    </Button>
  );
}

export default CopyButton;
