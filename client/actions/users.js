import request from 'superagent';

import showError from '.';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const REQUEST_USERS = 'REQUEST_USERS';

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

export const receiveUsers = (users) => {
  console.log('actions-reieveUsers', users);
  return {
    type: RECEIVE_USERS,
    users: users
  };
};

export const requestUsers = () => {
  return {
    type: REQUEST_USERS
  };
};
