import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpansionPanel = withStyles({
  root: {
    border: 'unset',
    boxShadow: 'unset',
    width: '100%',
    background: 'transparent',
    borderBottom: '1px solid #EBEBEB',
    borderTop: '1px solid #EBEBEB',
    borderRadius: '0px !important',
    margin: '-1px 0px 0px 0px !important'
  }
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'transparent',
    height: 64,
    padding: 10,
    '& .MuiExpansionPanelSummary-content': {
      fontFamily: 'Apercu',
      fontSize: 16,
      color: '#222222'
    },
    '& svg': {
      color: 'black'
    }
  }
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(() => ({
  root: {
    padding: 12
  }
}))(MuiExpansionPanelDetails);

export default function Collapse({
  summary = 'summary',
  disabled = false,
  finished = false,
  details
}) {
  return (
    <ExpansionPanel disabled={disabled}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        className="border-red"
      >
        {summary}
        {finished && (
          <img
            src="/static/images/complete.svg"
            style={{ marginLeft: 10 }}
            alt=""
          />
        )}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{details}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
