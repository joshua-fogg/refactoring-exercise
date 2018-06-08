import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadUsers from './LoadUsers'; // TODO: REMOVE THIS WITH LIFECYCLE HOOK
import UserTable from './TableComponent'
import WaitIndicator from './WaitIndicator'
import Filter from './Filter'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadUsers />
    <Filter />
    <WaitIndicator />
    <UserTable />
  </div>
)

export default App
