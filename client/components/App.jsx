import React from 'react';

import ErrorMessage from './ErrorMessage';
import UserTable from './UserTable';
import WaitIndicator from './WaitIndicator';

const App = () => (
  <div className='root container'>
    <ErrorMessage />
    <section>
      <WaitIndicator />
      <UserTable />
    </section>
  </div>
)

export default App
