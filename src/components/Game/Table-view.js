import React from 'react';
import Card from './Card';
import gameServices from '../../services/game-services';

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
    let dealtHand;
    gameServices.receiveHand()
      .then(returnedHand => dealtHand = returnedHand)
      .then(dealtHand => this.setHand(dealtHand));
  };

  setHand = (hand) => {
    this.setState({
      hand: hand,
      dealt: true
    },console.log(hand))
  };

  //TIMERS DONE ON FRONT END//

  render(){
    let layout;
    if(this.state.dealt === false){
      layout = <div>Placeholder</div>
    } else{
      layout = <div className ="cards">
        {this.state.hand.map((card, index) => {
         return <Card key={index}
          suit={card[0]} value={card[1]} />
        })}
      </div>}
    return(
      <div className="table container">   
        <div className="non-player north-hand top">
          <div>
            <button onClick={this.clickHandler}>Deal</button>
          </div>
        North
        </div>

        <div className="mid">
          <div className="non-player west-hand">West</div>
          <div className="play-field">Play</div>
          <div className="non-player east-hand ">East</div>
        </div>
        
        <div className="player-hand south-hand bot">{layout}</div>
    </div>
    
    )
  };
}

export default Table;