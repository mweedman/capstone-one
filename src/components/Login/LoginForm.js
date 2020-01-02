import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-services';
import LoginApiService from '../../services/login-api-service'

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };
  state = { error: null }

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({error: null});
    const { user_name, password } = e.target;

    LoginApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
    .then(res => {
      user_name.value='';
      password.value='';
      TokenService.saveAuthToken(res.authToken);
      this.props.onLoginSuccess();
    })
    .catch(res => {
      this.setState({ error: res.error})
    })
  }

  render(){
    return(
      <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
        <input required name="user_name" id="username" placeholder="username" />
        <input required name="password" id="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
        <Link to='/create-account'>
          <button>Create account!</button>
        </Link>
      </form>
    )
  }

}