import React from 'react';
import { makeStyles } from '@material-ui/core';
import Collapse from './Collapse';
import { useSelector, useDispatch } from 'react-redux';
import { completePaymentInfo, expandPaymentInfo } from 'src/actions/uiActions';

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
      // fontFamily: 'Apercu',
      fontWeight: 500,
      fontSize: 16,
      color: 'white'
    }
  }
}));

const PaymentInfo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    paymentInfoExpanded,
    paymentInfoFinished,
    scheduleFinished,
    contactInfoFinished
  } = useSelector(state => state.ui.collapse);

  const handleContinue = () => {
    dispatch(completePaymentInfo(true));
  };

  const handleExpand = (e, expanded) => {
    dispatch(expandPaymentInfo(expanded));
  };

  return (
    <Collapse
      summary="3.  Payment information"
      disabled={!(scheduleFinished && contactInfoFinished)}
      finished={paymentInfoFinished}
      expanded={paymentInfoExpanded}
      handleExpand={handleExpand}
      details={
        <div className={classes.payment}>
          <div className="info">
            You can get your full refund back anytime before your second guided
            Haxo
          </div>
          <button onClick={handleContinue}>Complete Sign Up</button>
        </div>
      }
    />
  );
};

export default PaymentInfo;
