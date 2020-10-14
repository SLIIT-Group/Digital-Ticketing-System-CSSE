import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from "./actions/pasActions";
import Login from './components/User/Login';
import Register from './components/User/Register';
import UserHome from './components/User/UserHome';
import ManagerHome from './components/Manager/ManagerHome';
import InspectorHome from './components/Inspector/InspectorHome';
import disableBrowserBackButton from 'disable-browser-back-navigation';


useEffect(() => {
  store.dispatch(loadUser());
  disableBrowserBackButton();
});

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Switch>
        <div className='App'>
          <Route exact path='/register' component={Register} />
          <Route exact path='/user' component={UserHome}></Route>
          <Route exact path='/manager' component={ManagerHome}></Route>
          <Route exact path='/inspector' component={InspectorHome}></Route>
          <Route exact path='/' component={Login} />
        </div>
      </Switch>
      </Provider>
    </Router>
  );
}

export default App;
