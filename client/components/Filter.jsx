import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { dispatch } from 'redux';

import { SHOW_ALL, SHOW_OVERTHIRTY, SHOW_UNDERTHIRTY, SHOW_MALE, SHOW_FEMALE, fetchUsers } from '../actions'

const FilterBar = () => (
  <div className="nav-bar">
    <button className="btn" onClick={() => dispatch(fetchUsers())} > No Filter </button>
    <button className="btn" onClick={() => dispatch(SHOW_OVERTHIRTY)} > Over 30   </button>
    <button className="btn" onClick={() => dispatch(SHOW_UNDERTHIRTY)} > Under 30  </button>
    <button className="btn" onClick={() => dispatch(SHOW_MALE)} > Male  </button>
    <button className="btn" onClick={() => dispatch(SHOW_FEMALE)}> Female  </button>
  </div>
)

export default connect()(FilterBar)