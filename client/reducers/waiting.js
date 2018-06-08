import {
  SHOW_ERROR,
  REQUEST_USERS,
  RECEIVE_USERS } from '../actions'

const waiting = ( state = false, action ) => {
  switch (action.type) {
    case REQUEST_USERS:
      return true

    case RECEIVE_USERS:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
