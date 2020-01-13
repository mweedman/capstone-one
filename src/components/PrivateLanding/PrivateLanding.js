import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-services';

export default class PrivateLanding extends React.Component{
  static defaultProps = {
    handleLogout: () => {}
  };

  render(){
    return(
      <div>
          <h1>WAR!</h1>

      <div className="landingMenu">
        <button onClick={this.props.handleLogout}>Logout</button>
        <Link to='/game'>
          <button>Play Game</button>
        </Link>
        <Link to='/stats'>
          <button>Statistics</button>
        </Link>
        <Link to='/learn'>
          <button>Learn the Game!</button>
        </Link>
      </div>
      </div>
    )
  }
};
