import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Game from '../../routes/Game/Game-View';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import Landing from '../../routes/Landing/Landing-View'
import Login from '../../routes/Login/Login-View';
import NotFoundPage from '../../routes/NotFound/Not-Found-View';
import Stats from '../../routes/Stats/Stats-View';
import Create from '../../routes/Account/Create-Account-View';

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicOnlyRoute exact path={'/'} component={Landing} />
        <PublicOnlyRoute path={"/login"} component={Login} />
        <PublicOnlyRoute 
        path='/create-account' 
        component={Create} />
        <PrivateRoute path={'/game'} component={Game} />
        <PrivateRoute path='/stats' component={Stats} />
        <Route 
        component={NotFoundPage}
        />
      </Switch>
    </div>
  );
}

export default App;
