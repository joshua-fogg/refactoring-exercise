import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button/Button.js';
import { connect } from 'react-redux';

import { VisibilityFilters } from '../actions'

const FilterBar = () => (
  ReactDOM.render(
    <div>
      <Button label="No Filter" filter={ VisibilityFilters.SHOW_ALL } />,
      <Button label="Over 30"   filter={ VisibilityFilters.SHOW_OVERTHIRTY } />,
      <Button label="Under 30"  filter={ VisibilityFilters.SHOW_UNDERTHIRTY } />,
      <Button label="Male"      filter={ VisibilityFilters.SHOW_MALE } />,
      <Button label="Female"    filter={ VisibilityFilters.SHOW_FEMALE } />
  </div>
  )
)

connect()

export default FilterBar