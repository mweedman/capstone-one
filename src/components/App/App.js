import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Table from '../Game/Table-view';
import Login from '../Login/Login-View';
import Stats from '../Stats/Stats-View';
import Create from '../CreateAccount/Create-Account-View'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/create-account' component={Create} />
        <Route path='/game' component={Table} />
        <Route path='/stats' component={Stats} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
