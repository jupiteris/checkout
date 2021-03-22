import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Scheduling from './Scheduling';
import Contact from './Contact';
import PaymentInfo from './PaymentInfo';

const useStyles = makeStyles(() => ({
  root: {
    padding: '13px 16px'
  }
}));

export default function Checkout() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Scheduling />
      <Contact />
      <PaymentInfo />
    </Container>
  );
}
