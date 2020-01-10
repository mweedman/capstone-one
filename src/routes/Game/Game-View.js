import React from 'react';
import Table from '../../components/Table/Table';

class Game extends React.Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };
  
  render(){
    return(
      <Table />
    );
  }
};

export default Game;