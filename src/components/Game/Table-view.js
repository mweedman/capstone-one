import React from 'react';
import Deck from '../Deck/Deck';
import gameServices from '../../services/game-services';
import PlayingField from './PlayingField'
import './Table-view.css';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dealt: false,
      handLength1: null,
      handLength2: null,
      chestLength1: null,
      chestLength2: null,
      pot: [],
      warPot: [],
    };
  }

  clickHandler = (e) => {
    e.preventDefault();
    gameServices.receiveHand()
      .then(returnedHand => this.setHand(returnedHand));
  };

  setHand = (cards) => {
    this.setState({
      handLength1: cards.handLength1,
      handLength2: cards.handLength2,
      dealt: true
    }, console.log(this.state))
  };

  setPlayState = (cards) => {
    this.setState({
      pot: [...cards.pot],
      chest1: cards.chest1,
      warPot: [...cards.warpot],
      handLength1: cards.handLength1,
      handLength2: cards.handLength2,
      chestLength1: cards.chestLength1,
      chestLength2: cards.chestLength2
    }, console.log(this.state));
  };

  playCard = (e) => {
    e.preventDefault();
    gameServices.sendCard()
    .then(obj => {
      this.setPlayState(obj);
    });
  };


  //TIMERS DONE ON FRONT END//

  render(){
    let layout;
    if(this.state.dealt === false){
      layout = <div>Placeholder</div>
    } else{
      layout = <div className ="cards">
          <Deck />
      </div>}
    let kitty;
    if(this.state.pot.lenght === 0){
      kitty = <div>Placeholder</div>
    } else{
      kitty = <PlayingField cards={this.state.pot} />
    }
    return(
      <div className="table container">   
        <div className="top">
          <div>
            <button onClick={this.clickHandler}>Deal</button>
          </div>
        </div>

        <div className="mid">
          <div className="player-hand west-hand" onClick={this.playCard}>
            {layout}
          </div>
          <div className="play-field">
            {kitty}
          </div>
          <div className="player-hand east-hand">{layout}</div>
        </div>
        
    </div>
    
    )
  };
}

export default Table;