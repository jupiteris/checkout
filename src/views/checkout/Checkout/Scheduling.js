import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Collapse from './Collapse';

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
      fontFamily: 'Apercu',
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
    selected: true
  },
  {
    id: '2',
    time: 'Sat/Sun at 4 pm EST',
    selected: false
  },
  {
    id: '3',
    time: 'Mon/ Tue at 1 pm EST',
    selected: true
  }
];

const Scheduling = () => {
  const classes = useStyles();
  const [finished, setFinished] = useState(false);
  const [schedules, setSchedules] = useState([...dummySchedules]);

  const handleContinue = () => {
    setFinished(true);
  };
  const handleSelect = id => {
    setSchedules(
      schedules.map(schedule => {
        if (schedule?.id === id)
          return { ...schedule, selected: !schedule?.selected };
        else return schedule;
      })
    );
  };
  return (
    <Collapse
      summary="1.  Scheduling"
      disabled={false}
      finished={finished}
      details={
        <div className={classes.schedules}>
          {schedules.map(({ id, time, selected }) => (
            <div className="schedule" key={id} onClick={() => handleSelect(id)}>
              <span>{time}</span>
              {selected && <div className="selected" />}
            </div>
          ))}
          <button onClick={handleContinue}>Continue</button>
        </div>
      }
    />
  );
};

export default Scheduling;
