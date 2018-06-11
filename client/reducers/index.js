import { combineReducers } from 'redux';

import errorMessage from './error-message';
import users from './users';
import waiting from './waiting';

export default combineReducers({
  errorMessage,
  users,
  waiting
});
