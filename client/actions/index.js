import request from 'superagent';

export const SHOW_ERROR = 'SHOW_ERROR';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_UNDERTHIRTY = 'SHOW_UNDERTHIRTY';
export const SHOW_OVERTHIRTY = 'SHOW_OVERTHIRTY';
export const SHOW_MALE = 'SHOW_MALE';
export const SHOW_FEMALE = 'SHOW_FEMALE';

export const requestUsers = () => {
  return {
    type: REQUEST_USERS
  };
};

export const setVisibilityFilter = filter => ({
  type: `SET_VISIBILITY_FILTER__${filter}`,
  filter
});

export const receiveUsers = (users) => {
  console.log('actions-reieveUsers', users);
  return {
    type: RECEIVE_USERS,
    users: users
  };
};

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  };
};

export function fetchUsers (users) {
  return dispatch => {
    dispatch(requestUsers());
    return request
      .get(`/api/v1/users`, (err, res) => {
        if (err) {
          return dispatch(showError(err));
        } else {
          console.log('RETURNED DATA', res.body);
          dispatch(receiveUsers(res.body));
        }
      });
  };
}
