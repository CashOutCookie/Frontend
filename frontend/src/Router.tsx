import React from 'react';
import Dashboard from './pages/Dashboard'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return(
    <div className="router">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App