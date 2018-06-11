import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadUsers from './LoadUsers'; // TODO: REMOVE THIS WITH LIFECYCLE HOOK
import UserTable from './UserTable'
import WaitIndicator from './WaitIndicator'
import Filter from './Filter'

const App = () => (
  <div className='root container'>
    <ErrorMessage />
    <section>
    <Filter />
    <WaitIndicator />
    <UserTable />
    </section>
  </div>
)

export default App
