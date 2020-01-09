import React from 'react';
import LoginApiService from '../../services/login-api-service';

class CreateAccount extends React.Component{
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };
  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { user_name, user_password, email_address } = ev.target;

    this.setState({ error: null })
    LoginApiService.postUser({
      user_name: user_name.value,
      user_password: user_password.value,
      email_address: email_address.value
    })
      .then(user => {
        user_name.value = '';
        user_password.value = '';
        email_address.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      })
  }

  render(){
    const { error } = this.state
    return(
      <div>
        <h3>Create New Account</h3>
        <div role="alert">
          {error && <p className="red">{error}</p>}
        </div>
        <div className="create">
          <form className="create-form" onSubmit={this.handleSubmit}>
            <input 
            name="user_name" id="username" placeholder="username" 
            />
            <input 
            name="user_password"
            id="password" placeholder="password" 
            type="password"
            />
            <input 
            name="email_address"
            id="email" 
            placeholder="email address" />
            <button type="submit">Create Account</button>
          </form>
        </div>
    </div>
    )
  }
}

export default CreateAccount;