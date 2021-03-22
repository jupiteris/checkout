/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  OPEN_SCHEDULE,
  FINISH_SCHEDULE,
  OPEN_CONTACT_INFO,
  FINISH_CONTACT_INFO,
  OPEN_PAYMENT_INFO,
  FINISH_PAYMENT_INFO
} from 'src/actions/uiActions';

const initialState = {
  collapse: {
    scheduleExpanded: false,
    contactInfoExpanded: false,
    paymentInfoExpanded: false,
    scheduleFinished: false,
    contactInfoFinished: false,
    paymentInfoFinished: false
  }
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SCHEDULE: {
      return produce(state, draft => {
        draft.collapse = {
          ...state.collapse,
          scheduleExpanded: action.payload
        };
      });
    }

    case FINISH_SCHEDULE: {
      return produce(state, draft => {
        draft.collapse = {
          ...state.collapse,
          scheduleFinished: action.payload
        };
      });
    }

    case OPEN_CONTACT_INFO: {
      return produce(state, draft => {
        draft.collapse = {
          ...state.collapse,
          contactInfoExpanded: action.payload
        };
      });
    }

    case FINISH_CONTACT_INFO: {
      return produce(state, draft => {
        draft.collapse = {
          ...state.collapse,
          contactInfoFinished: action.payload
        };
      });
    }

    case OPEN_PAYMENT_INFO: {
      return produce(state, draft => {
        draft.collapse = {
          ...state.collapse,
          paymentInfoExpanded: action.payload
        };
      });
    }

    case FINISH_PAYMENT_INFO: {
      return produce(state, draft => {
        draft.collapse = {
          ...state.collapse,
          paymentInfoFinished: action.payload
        };
      });
    }

    default: {
      return state;
    }
  }
};

export default uiReducer;
