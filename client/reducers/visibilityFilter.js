import {
  SHOW_ALL
} from '../actions';

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return action;
    default:
      return state;
  }
};

export default visibilityFilter
;
