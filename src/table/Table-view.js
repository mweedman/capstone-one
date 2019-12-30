import React from 'react';
// import Card from './Card';
import gameServices from '../services/game-services';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hand: []
    };
  }

  clickHandler = (e) => {
    e.preventDefault();
    let returnedHands = gameServices.receiveHand();
    console.log(returnedHands);
  };

  //TIMERS DONE ON FRONT END//

  render(){

    // const layout = this.cards.map((card, index) => {
    // return <Card key={index}
    // suit={card[0]} value={card[1]} />
    // })
    return(
      <div>
        <button onClick={this.clickHandler}>Deal</button>
        <div>
          {/* {layout} */}
        </div>
      </div>
    )
  };
}

export default Table;