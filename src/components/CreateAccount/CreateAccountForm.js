import React from 'react';
import LoginApiService from '../../services/login-api-service';

class CreateAccount extends React.Component{
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };
  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { user_name, password, email_address } = ev.target;

    this.setState({ error: null })
    LoginApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      email_address: email_address.value
    })
      .then(user => {
        user_name.value = '';
        password.value = '';
        email_address.value = '';
        this.props.onRegistRationSuccess();
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
          <form className="create-form">
            <input 
            name="user_name" id="username" placeholder="username" 
            />
            <input 
            name="password"
            id="password" placeholder="password" 
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