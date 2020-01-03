import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  render() {
    return(
      <div>
        This page cannot be found.
        <Link to='/'>
          <button>Return Home</button>
        </Link>
      </div>
    )
  }
}