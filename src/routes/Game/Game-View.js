import React from 'react';
import Table from '../../components/Game/Table-view';

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