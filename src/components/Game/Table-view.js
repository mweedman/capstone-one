import React from 'react';
import Card from './Card';
import gameServices from '../../services/game-services';
import './Table-view.css';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hand: [],
      dealt: false
    };
  }

  clickHandler = (e) => {
    e.preventDefault();
    gameServices.receiveHand()
      .then(returnedHand => this.setHand(returnedHand));
  };

  setHand = (hand) => {
    console.log(hand);
    this.setState({
      hand: hand,
      dealt: true
    }, console.log(hand))
  };

  playCard = (e, obj) => {
    e.preventDefault();
    console.log(obj);
    gameServices.sendCard(obj, this.state.hand)
    .then(obj => console.log(obj));

  }

  //TIMERS DONE ON FRONT END//

  render(){
    let layout;
    if(this.state.dealt === false){
      layout = <div>Placeholder</div>
    } else{
      layout = <div className ="cards">
        {this.state.hand.map((card, index) => {
         return <Card key={index}
          suit={card[0]} value={card[1]} playCard={this.playCard}/>
        })}
      </div>}
    return(
      <div className="table container">   
        <div className="top">
          <div>
            <button onClick={this.clickHandler}>Deal</button>
          </div>
        </div>

        <div className="mid">
          <div className="player-hand west-hand">{layout}</div>
          <div className="play-field">Play</div>
          <div className="non-player east-hand ">East</div>
        </div>
        
    </div>
    
    )
  };
}

export default Table;