import React, { useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: 'Apercu',
    fontStyle: 'normal',
    fontWeight: 'normal'
  },
  header: {
    padding: '26px 41px 23px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },
  msg: {
    padding: '18px 25px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    background: '#EBEBEB',
    borderRadius: 16
  },
  steps: {
    marginTop: 12,
    padding: '29px 15px',
    display: 'flex',
    flexFlow: 'column',
    fontSize: 16,
    background: '#EBEBEB',
    borderRadius: 16,
    '& > p': {
      padding: '0px 0px 0px 10px',
      fontWeight: 'bold',
      fontSize: 24
    },
    '& a': {
      color: '#7A39CC',
      textDecoration: 'underline'
    },
    '& .step1': {
      display: 'flex',
      flexFlow: 'column',
      marginTop: 24,
      '& > p': {
        padding: 0,
        fontFamily: 'Roboto'
      },
      '& .code': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 10px',
        marginTop: 10,
        '& span': {
          fontWeight: 500,
          fontSize: 36,
          fontFamily: 'Roboto'
        },
        '& button': {
          width: 130,
          height: 38,
          background: '#7A39CC',
          borderRadius: 100,
          fontWeight: 500,
          fontSize: 16,
          color: '#FFFFFF',
          border: 'unset',
          fontFamily: 'Apercu'
        }
      },
      '& .copied': {
        height: 42,
        '& span': {
          height: 22,
          background: '#D0C9D6',
          borderRadius: 10,
          fontSize: 14,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Apercu',
          margin: '10px 0px'
        }
      }
    },
    '& .step2': {
      '& > p': {
        padding: 0,
        fontFamily: 'Roboto'
      }
    },
    '& .step3': {
      marginTop: 50,
      '& > p': {
        padding: 0,
        fontFamily: 'Roboto'
      }
    }
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto',
    color: '#7A39CC',
    marginTop: 40,
    '& p:nth-child(1)': {
      fontWeight: 500,
      fontSize: 24
    },
    '& p:nth-child(2)': {
      fontWeight: 500,
      fontSize: 12,
      marginTop: 7
    },
    '& img': {
      marginTop: 15
    }
  }
}));

function SignUpConfirmation() {
  const classes = useStyles();
  const [copied, setcopied] = useState(false);
  const msg = 'We’ve sent a confirmation copy to your email xxx@gmail.com';
  const handleCopy = () => {
    setcopied(true);
  };
  return (
    <Page title="Sign up confirmation" className={classes.root}>
      <div className={classes.header}>Sign up confirmation</div>
      <Container maxWidth={false}>
        <div className={classes.msg}>{msg ?? ''}</div>
        <div className={classes.steps}>
          <p>Next steps:</p>
          <div className="step1">
            <p>1. Enter your code in Haxo app</p>
            <div className="code">
              <span>7hj8oi</span>
              <button onClick={handleCopy}>Copy code</button>
            </div>
            <div className="copied">
              {copied ? <span>Code copied</span> : ''}
            </div>
          </div>
          <div className="step2">
            <p>
              2. Complete check-in <a href="">learn more</a>
            </p>
          </div>
          <div className="step3">
            <p>3. Haxo will start the matching process.</p>
          </div>
        </div>
        <div className={classes.info}>
          <p>Haxo</p>
          <p>@haxotogether | hello@haxo.co</p>
          <img src="/static/images/app_store.svg" alt="" />
        </div>
      </Container>
    </Page>
  );
}

export default SignUpConfirmation;
