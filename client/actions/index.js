import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const REQUEST_USERS = 'REQUEST_USERS'

export const requestUsers = () => {
  return {
    type: REQUEST_USERS
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users: users
    // .map(user => {
    //   console.log(users);
    //   return user.data
    // })
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_UNDERTHIRTY: 'SHOW_UNDERTHIRTY',
  SHOW_OVERTHIRTY: 'SHOW_OVERTHIRTY',
  SHOW_MALE: 'SHOW_MALE',
  SHOW_FEMALE: 'SHOW_FEMALE'
}

export function fetchUsers(users) {
  return (dispatch) => {
    dispatch(requestUsers())
    return request
      .get(`/api/v1/users`)
      .then(res => {
        dispatch(receiveUsers(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
