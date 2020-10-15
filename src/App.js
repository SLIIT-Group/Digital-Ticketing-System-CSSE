import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

import UserHome from './components/User/UserHome';
import ManagerHome from './components/Manager/ManagerHome';
import InspectorHome from './components/Inspector/InspectorHome';
import AddCredit from "./components/User/AddCredit";
import PayFares from "./components/User/PayFares";
function App() {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Route exact path='/register' component={Register} />
          <Route exact path='/user' component={UserHome}></Route>
          <Route exact path='/manager' component={ManagerHome}></Route>
          <Route exact path='/inspector' component={InspectorHome}></Route>
          <Route exact path='/addCredit' component={AddCredit}></Route>
          <Route exact path='/payFares' component={PayFares}></Route>

          <Route exact path='/' component={Login} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
