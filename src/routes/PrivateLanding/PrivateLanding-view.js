import React from 'react';
import PrivateLandingContent from '../../components/PrivateLanding/PrivateLanding';
import TokenService from '../../services/token-services';

export default class PrivateLanding extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleLogout = (ev) => {
    ev.preventDefault();
    TokenService.clearAuthToken();
    const { history } = this.props;
    const destination = '/';
    history.push(destination);
  };
  
  render(){
    return(
      <PrivateLandingContent handleLogout={this.handleLogout}/>
    )
  }
}
