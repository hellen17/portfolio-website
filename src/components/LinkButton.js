import React from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    outlinedButton: {
        '&.MuiButton-outlined': {
            padding: 10,
            borderColor: 'var(--primary-color)',
            color: '#fff'
    }}
})

const LinkButton = ({ href, children, variant, outlined }) => {
  const classes = useStyles();
  const buttonVariant = outlined ? 'outlined' : 'contained';
  const buttonStyle = {
    textTransform: 'none',
  };

  if (variant === 'contained') {
    buttonStyle.backgroundColor = 'var(--primary-color)';
    buttonStyle.marginRight = '1rem';
  }

  return (
    <Button variant={buttonVariant} component="a" href={href} target="_blank" style={buttonStyle} className={true ? classes.outlinedButton : ''} > 
      {children}
    </Button>
  );
};

export default LinkButton;
