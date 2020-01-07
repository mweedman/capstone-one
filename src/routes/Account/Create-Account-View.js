import React from 'react';
import CreateAccount from '../../components/CreateAccount/CreateAccountForm'

class CreateAccountView extends React.Component{
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  onRegistrationSuccess = user => {
    const { history } = this.props;
    history.push('/login');
  }

  render(){
    return(
      <CreateAccount onRegistrationSuccess={this.onRegistrationSuccess}
      />
    )
  }
}

export default CreateAccountView;