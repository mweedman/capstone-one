import React from 'react';
import LandingContent from '../../components/Landing/Landing';

export default class Landing extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  render(){
    return(
      <LandingContent />
    )
  }
}