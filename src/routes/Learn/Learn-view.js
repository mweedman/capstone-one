import React from 'react';
import LearnContent from '../../components/LearnGame/LearnGame';

export default class Landing extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  render(){
    return(
      <LearnContent />
    )
  }
}