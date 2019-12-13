import React from 'react';
import cardmethods from '../services/Card-Methods';
import Card from './Card';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.cards = cardmethods.returnShuffledCards();
  }

  render(){

    const layout = this.cards.map((card, index) => {
    return <Card key={index}
    suit={card[0]} value={card[1]} />
    })
    return(
      <div>
        <div>
          {layout}
        </div>
      </div>
    )
  };
}

export default Table;