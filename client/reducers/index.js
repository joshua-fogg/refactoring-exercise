import { combineReducers } from 'redux';

import errorMessage from './error-message';
import users from './users';
import waiting from './waiting';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  errorMessage,
  users,
  visibilityFilter,
  waiting
});
