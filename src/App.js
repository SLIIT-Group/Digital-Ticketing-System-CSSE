import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/pasActions';
import Login from './components/User/Login';
import Register from './components/User/Register';
import UserHome from './components/User/UserHome';
import ManagerHome from './components/Manager/ManagerHome';
import InspectorHome from './components/Inspector/InspectorHome';
import AddCredit from "./components/User/AddCredit";
import PayFares from "./components/User/PayFares";
import disableBrowserBackButton from 'disable-browser-back-navigation';
import ViewTokens from './components/Inspector/ViewTokens';
import PassengerDetails from './components/Inspector/PassengerDetails';
import TokenForm from './components/Inspector/TokenForm';
import GenerateTImeTable from './components/Manager/GenerateTImeTable';
import ManagerLogin from './components/Manager/Login';
import AddManager from './components/Manager/AddManager';
import InspectorLogin from './components/Inspector/Login';
import AddInspector from './components/Inspector/AddInspector';
import AccountDetails from './components/User/AccountDetails';
import ViewTImeTableDetails from './components/Manager/ViewTImeTableDetails';
import ViewPassenger from './components/Manager/ViewPassenger';
import ViewInspectorDetails from './components/Manager/ViewInspectorDetails';
import Stats from './components/Manager/Stats';


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    disableBrowserBackButton();
  });
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <div className='App'>
            <Route exact path='/register' component={Register} />
            <Route exact path='/user' component={UserHome}></Route>
            <Route
              exact
              path='/user/account'
              component={AccountDetails}
            ></Route>
            <Route exact path='/manager' component={ManagerHome}></Route>
            <Route exact path='/inspector' component={InspectorHome}></Route>
            <Route
              exact
              path='/inspector/tokenfilter'
              component={TokenForm}
            ></Route>
            <Route
              exact
              path='/inspector/viewtokens'
              component={ViewTokens}
            ></Route>
            <Route
              exact
              path='/inspector/passengers'
              component={PassengerDetails}
            ></Route>
            <Route exact path='/addCredit' component={AddCredit}></Route>
            <Route exact path='/payFares' component={PayFares}></Route>
            <Route exact path='/' component={Login} />
            <Route exact path='/generateTimeTable' component={GenerateTImeTable}></Route>
            <Route exact path='/manager/login' component={ManagerLogin} />
            <Route exact path='/manager/add' component={AddManager} />
            <Route exact path='/inspector/login' component={InspectorLogin} />
            <Route exact path='/inspector/add' component={AddInspector} />
            <Route exact path='/viewTimeTable' component={ViewTImeTableDetails}></Route>
            <Route exact path='/viewPassenger' component={ViewPassenger}></Route>
            <Route exact path='/viewInspectors' component={ViewInspectorDetails}></Route>
            <Route exact path='/stats' component={Stats}></Route>





          </div>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
