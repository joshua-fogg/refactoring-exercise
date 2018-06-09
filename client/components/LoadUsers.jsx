import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

const LoadSubreddit = ({dispatch}) => (
  <button onClick={() => dispatch(fetchUsers())}>
    Fetch Posts
  </button>
)

export default connect()(LoadSubreddit)
