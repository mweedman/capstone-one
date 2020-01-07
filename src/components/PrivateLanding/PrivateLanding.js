import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-services';

export default class Landing extends React.Component{

  handleLogout = (ev) => {
    ev.preventDefault();
    TokenService.clearAuthToken();
    const { history } = this.props;
    const destination = '/';
    history.push(destination);
  }

  render(){
    return(
      <div>
        <button onClick={this.handleLogout}>Logout</button>
        <Link to='/game'>
          <button>Play Game</button>
        </Link>
        <Link to='/stats'>
          <button>Statistics</button>
        </Link>
        <button>Learn the Game!</button>
      </div>
    )
  }
};
