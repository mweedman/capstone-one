import React from 'react';
import LoginForm from '../../components/Login/LoginForm';

export default class Login extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
    }

  render(){
    return(
      <div>
        <h3>Login</h3>
        <LoginForm 
        onLoginSuccess={this.handleLoginSuccess}
        />
      </div>
    );
  }
}