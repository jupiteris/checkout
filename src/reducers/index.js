import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accountReducer from './accountReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  account: accountReducer,
  ui: uiReducer,
  form: formReducer
});

export default rootReducer;
