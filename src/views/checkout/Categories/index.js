import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles(() => ({
  header: {
    width: '100%',
    height: 78,
    background: '#F9F6FE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    fontSize: 26,
    lineHeight: 30,
    color: '#000000'
  },
  category: {
    '& p': {
      padding: 0,
      height: 40,
      display: 'flex',
      alignItems: 'center'
    },
    '& .item': {
      padding: '29px 0px',
      width: '100%',
      display: 'flex',
      '& div:first-child': {
        width: 67,
        height: 64,
        background: '#C4C4C4'
      },
      '& div:last-child': {
        display: 'flex',
        flexFlow: 'column',
        marginLeft: 14,
        width: 'calc(100% - 81px)',
        fontWeight: 300,
        '& span:nth-child(1)': {
          fontSize: 16
        },
        '& span:nth-child(2)': {
          fontSize: 14,
          marginBottom: 10
        },
        '& span:nth-child(3)': {
          fontSize: 14
        }
      }
    }
  }
}));

const dummyCategories = [
  {
    name: 'Category 1',
    meetings: [
      {
        content: 'Intro to Python',
        opponent: 'with Chris',
        time: 'Sat / Sun at 4 pm EST',
        mId: '0'
      },
      {
        content: 'Intro to Python',
        opponent: 'with Chris',
        time: 'Sat / Sun at 4 pm EST',
        mId: '1'
      },
      {
        content: 'Intro to Python',
        opponent: 'with Chris',
        time: 'Sat / Sun at 4 pm EST',
        mId: '2'
      }
    ]
  },
  {
    name: 'Category 2',
    meetings: [
      {
        content: 'Intro to Python',
        opponent: 'with Chris',
        time: 'Sat / Sun at 4 pm EST',
        mId: '3'
      }
    ]
  }
];

function Categories() {
  const classes = useStyles();

  const handleClick = () => {
    window.location.href = '/app/signup-confirmation';
  };

  return (
    <Page title="Categories" className={classes.root}>
      <div className={classes.header}>Pick a guided haxo series</div>
      <Container maxWidth={false}>
        {dummyCategories.map(({ name, meetings }) => (
          <div className={classes.category} key={name}>
            <p>{name ?? ''}</p>
            {meetings.map(({ content, opponent, time, mId }) => (
              <div className="item" key={mId} onClick={handleClick}>
                <div></div>
                <div>
                  <span>{content ?? ''}</span>
                  <span>{opponent ?? ''}</span>
                  <span>{time ?? ''}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </Page>
  );
}

export default Categories;
