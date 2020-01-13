import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default class Landing extends React.Component{

  render(){
    return(
      <div>
        <h1>WAR!</h1>
      <div className="landingMenu">
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/create-account'>
          <button>Create Account</button>
        </Link>
        <Link to='/game'>
          <button>Play Game</button>
        </Link>
        <Link to='/learn'>
          <button>Learn the Game!</button>
        </Link>
      </div>
      </div>
    )
  }
};
