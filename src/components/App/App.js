import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Game from '../../routes/Game/Game-View';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import Landing from '../../routes/Landing/Landing-View'
import Login from '../../routes/Login/Login-View';
import Learn from '../../routes/Learn/Learn-view';
import NotFoundPage from '../../routes/NotFound/Not-Found-View';
import Stats from '../../routes/Stats/Stats-View';
import Create from '../../routes/Account/Create-Account-View';
import PrivateLanding from '../../routes/PrivateLanding/PrivateLanding-view';

function App() {

  return (
    <div className="App">
      <Switch>
        <PublicOnlyRoute exact path={'/'} component={Landing} />
        <PublicOnlyRoute path={"/login"} component={Login} />
        <PublicOnlyRoute 
        path='/create-account' 
        component={Create} />
        <Route path={'/learn'} component={Learn} />
        <PrivateRoute path={'/landing'} component={PrivateLanding} />
        <PrivateRoute path={'/game'} component={Game} />
        <PrivateRoute path='/stats' component={Stats} />
        <Route 
        component={NotFoundPage}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
