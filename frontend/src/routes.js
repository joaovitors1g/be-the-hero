import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import GlobalStyle from './global';

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/' component={Logon} />
          <Route path='/register' component={Register} />
          <Route path='/profile' component={Profile} />
          <Route path='/incidents/new' component={NewIncident} />
        </Switch>
      </Router>
    </>
  );
}
