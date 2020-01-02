import React from 'react';

class CreateAccount extends React.Component{

  render(){
    return(
      <div>
        <h3>Create New Account</h3>
        <div class="create">
          <form class="create-form">
            <input id="username" placeholder="username" />
            <input id="password" placeholder="password" />
            <input id="email" placeholder="email address" />
            <button type="submit">Create Account</button>
          </form>
        </div>
    </div>
    )
  }
}

export default CreateAccount;