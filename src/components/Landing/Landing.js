import React from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component{

  render(){
    return(
      <div>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/create-account'>
          <button>Create Account</button>
        </Link>
        <Link to='/game'>
          <button>Play Game</button>
        </Link>
        <button>Learn the Game!</button>
      </div>
    )
  }
};
