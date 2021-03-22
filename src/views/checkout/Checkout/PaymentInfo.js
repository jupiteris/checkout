import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Collapse from './Collapse';

const useStyles = makeStyles(() => ({
  payment: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '100%',
    '& .info': {
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 16,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 62,
      background: 'rgba(255, 15, 159, 0.1)',
      color: '#000000',
      padding: '12px 40px',
      margin: '0px -28px',
      textAlign: 'center'
    },
    '& button': {
      margin: '7px 0px 75px',
      width: '100%',
      height: 39,
      background: '#7A39CC',
      borderRadius: 100,
      border: 'unset',
      fontFamily: 'Apercu',
      fontWeight: 500,
      fontSize: 16,
      color: 'white'
    }
  }
}));

const PaymentInfo = () => {
  const classes = useStyles();
  const [finished, setFinished] = useState(false);
  const [price, setPrice] = useState(0);

  const handleContinue = () => {
    setFinished(true);
  };

  return (
    <Collapse
      summary="3.  Payment information"
      disabled={false}
      finished={finished}
      details={
        <div className={classes.payment}>
          <div className="info">
            You can get your full refund back anytime before your second guided
            Haxo
          </div>
          <button onClick={handleContinue}>
            Pay ${price.toFixed(2) ?? 0.0}
          </button>
        </div>
      }
    />
  );
};

export default PaymentInfo;
