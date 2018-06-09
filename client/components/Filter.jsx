import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { dispatch } from 'redux';

import { VisibilityFilters } from '../actions'

const FilterBar = () => (
  <div className="nav-bar">
    <button className="btn" click={() => dispatch(VisibilityFilters.SHOW_ALL)} > No Filter </button>
    <button className="btn" click={() => dispatch(VisibilityFilters.SHOW_OVERTHIRTY)} > Over 30   </button>
    <button className="btn" click={() => dispatch(VisibilityFilters.SHOW_UNDERTHIRTY)} > Under 30  </button>
    <button className="btn" click={() => dispatch(VisibilityFilters.SHOW_MALE)} > Male  </button>
    <button className="btn" click={() => dispatch(VisibilityFilters.SHOW_FEMALE)}> Female  </button>
  </div>
)

export default connect()(FilterBar)