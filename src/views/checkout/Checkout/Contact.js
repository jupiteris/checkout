import React, { useState } from 'react';
import {
  makeStyles,
  Checkbox,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  DialogActions
} from '@material-ui/core';
import Collapse from './Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector, useDispatch } from 'react-redux';
import {
  expandPaymentInfo,
  expandContactInfo,
  expandSchedule,
  completeContactInfo
} from 'src/actions/uiActions';

const useStyles = makeStyles(() => ({
  contacts: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '100%',
    '& .contact': {
      width: '100%',
      minHeight: 57,
      padding: 14,
      background: '#EBEBEB',
      borderRadius: 6,
      marginBottom: 11,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: 'unset',
      fontSize: 16,
      color: '#000000'
    },
    '& .agree': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      width: '100%',
      '& .MuiCheckbox-root': {
        padding: 0,
        '& svg': {
          width: 37,
          height: 37
        }
      },
      '& .MuiCheckbox-colorPrimary.Mui-checked': {
        color: '#7A39CC'
      },
      '& > p': {
        marginLeft: 5,
        padding: 0,
        fontSize: 16,
        color: '#000000',
        lineHeight: '27px',
        '& a': {
          textDecoration: 'underline'
        }
      }
    },
    '& button': {
      marginTop: 46,
      marginBottom: 75,
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
  },
  dialog: {
    '& .MuiDialog-paperWidthSm': {
      margin: 0,
      background: '#FFFFFF',
      boxShadow: '0px 8px 28px rgba(0, 0, 0, 0.28)',
      borderRadius: 12,
      width: 352,
      '& .MuiDialogTitle-root': {
        color: '#000000',
        padding: '23px 24px',
        '& h2': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 500,
          '& svg': {
            marginRight: 50,
            color: '#222222'
          }
        }
      },
      '& .MuiDialogContent-root': {
        padding: '28px 27px',
        borderTop: '1px solid #EBEBEB',
        borderBottom: '1px solid #EBEBEB',
        '& p': {
          color: '#000000'
        }
      },
      '& .MuiDialogActions-root': {
        width: '100%',
        justifyContent: 'center',
        padding: 24,
        '& button': {
          width: 305,
          height: 48,
          background: '#5A5A5A',
          borderRadius: 100,
          border: 'unset',
          fontSize: 16,
          color: '#ffffff',
          // fontFamily: 'Apercu',
          fontWeight: 'bold'
        }
      }
    }
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const dummyContact = {
  name: 'Abby',
  email: 'abbyisthebest@gamil.com',
  phone: '(858)337-0025'
};

const Contact = () => {
  const classes = useStyles();
  const [agree, setAgree] = useState(false);
  const [open, setOpen] = useState(false);
  const {
    contactInfoExpanded,
    scheduleFinished,
    contactInfoFinished
  } = useSelector(state => state.ui.collapse);
  const dispatch = useDispatch();
  const [contact, setContact] = useState(dummyContact);

  const contactKeys = Object.keys(contact);

  const handleContinue = () => {
    dispatch(completeContactInfo(true));
    dispatch(expandSchedule(false));
    dispatch(expandContactInfo(false));
    dispatch(expandPaymentInfo(true));
  };

  const handleAgree = event => {
    setAgree(event.target.checked);
    setOpen(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpand = (e, expanded) => {
    dispatch(expandContactInfo(expanded));
  };

  const handleChange = (e, key) => {
    setContact({ ...contact, [key]: e.target.value });
  };

  return (
    <>
      <Collapse
        summary="2.  Contact info"
        // disabled={!scheduleFinished}
        disabled={false}
        finished={contactInfoFinished}
        expanded={contactInfoExpanded}
        handleExpand={handleExpand}
        details={
          <div className={classes.contacts}>
            {contactKeys.map(key => (
              <input
                className="contact"
                key={key}
                value={contact[key]}
                onChange={e => handleChange(e, key)}
              />
            ))}
            <div className="agree">
              <Checkbox color="primary" onChange={handleAgree} value={agree} />
              <p>
                I agree to be <a>contacted by Haxo</a>.
              </p>
            </div>
            <button onClick={handleContinue}>Continue</button>
          </div>
        }
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.dialog}
      >
        <DialogTitle id="alert-dialog-slide-title">
          <CloseIcon onClick={handleClose} /> Contacted by Haxo
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            By checking the box on the left, you are agreeing to recieve text
            messages from Haxo about the Haxo app. Msg & data rates may apply.
            You may recieve up to 3 msgs/week. Your consent is not required to
            use the app. You can stop recieeving texts at any time by texting
            STOP, an you can contact support by texting HELP.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Got it</button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Contact;
