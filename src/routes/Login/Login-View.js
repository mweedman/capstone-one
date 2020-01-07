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
    const { history } = this.props;
    const destination = '/landing';
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