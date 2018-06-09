import { RECEIVE_USERS } from '../actions'

const defaultUserList = [
  {
      name: "Jim",
      age: 30,
      gender: "male",
      _id: "b3Fshn8F976TZCTg"
  },
  {
      name: "Jane",
      age: 55,
      gender: "female",
      _id: "k3nEqkqlKmWZNejC"
  },
  {
      name: "Bob",
      age: 20,
      gender: "male",
      _id: "oqnu2ZnPTebp04bG"
  },
  {
      name: "Sally",
      age: 24,
      gender: "female",
      _id: "tKmv8RC6GlUnYcV3"
  }
]

function users (state = defaultUserList, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return state

    default:
      return state
  }
}

export default users
