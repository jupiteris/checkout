import React, { useState } from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Collapse from './Collapse';
import { useSelector, useDispatch } from 'react-redux';
import {
  expandContactInfo,
  expandSchedule,
  expandPaymentInfo,
  completeSchedule
} from 'src/actions/uiActions';

const useStyles = makeStyles(() => ({
  schedules: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '100%',
    '& .schedule': {
      width: '100%',
      minHeight: 57,
      padding: 14,
      background: '#EBEBEB',
      borderRadius: 6,
      marginBottom: 11,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& span': {
        fontSize: 16,
        color: '#000000'
      },
      '& .selected': {
        width: 29,
        height: 29,
        background: '#7A39CC',
        borderRadius: '50%'
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
  }
}));

const dummySchedules = [
  {
    id: '1',
    time: 'Wed/Thu at 7 pm EST',
    selected: false
  },
  {
    id: '2',
    time: 'Sat/Sun at 4 pm EST',
    selected: false
  },
  {
    id: '3',
    time: 'Mon/ Tue at 1 pm EST',
    selected: false
  }
];

const Scheduling = () => {
  const classes = useStyles();
  const [schedules, setSchedules] = useState([...dummySchedules]);
  const [continueDisabled, setContinueDisabled] = useState(false);
  const { scheduleExpanded, scheduleFinished } = useSelector(
    state => state.ui.collapse
  );
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(completeSchedule(true));
    dispatch(expandSchedule(false));
    dispatch(expandContactInfo(true));
  };

  const handleSelect = id => {
    const _schedules = schedules.map(schedule => {
      if (schedule?.id === id)
        return { ...schedule, selected: !schedule?.selected };
      else return schedule;
    });
    setSchedules(_schedules);
    const selected = _schedules.filter(({ selected }) => selected).length;
    setContinueDisabled(_schedules.filter(({ selected }) => selected).length);
    if (!selected) {
      dispatch(completeSchedule(false));
      dispatch(expandContactInfo(false));
      dispatch(expandPaymentInfo(false));
    }
  };

  const handleExpand = (e, expanded) => {
    dispatch(expandSchedule(expanded));
  };

  return (
    <Collapse
      summary="1.  Scheduling"
      disabled={false}
      finished={scheduleFinished}
      expanded={scheduleExpanded}
      handleExpand={handleExpand}
      details={
        <div className={classes.schedules}>
          {schedules.map(({ id, time, selected }) => (
            <div className="schedule" key={id} onClick={() => handleSelect(id)}>
              <span>{time}</span>
              {selected && <div className="selected" />}
            </div>
          ))}

          <Button onClick={handleContinue} disabled={!continueDisabled}>
            Continue
          </Button>
        </div>
      }
    />
  );
};

export default Scheduling;
