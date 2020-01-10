import React from 'react';
import gameServices from '../../services/game-services';
import PlayingField from '../PlayingField/PlayingField';
import EndMessage from '../EndMessage/EndMessage';
import './Table.css';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: null,
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
      dealt: true,
      message: null,
    })
  };

  setPlayState = (cards) => {
    if (!cards.message){
      this.setState({
        pot: [...cards.pot],
        chest1: cards.chest1,
        warPot: [...cards.warpot],
        handLength1: cards.handLength1,
        handLength2: cards.handLength2,
        chestLength1: cards.chestLength1,
        chestLength2: cards.chestLength2
      })
    } else{
      this.setState({
        message: cards.message
      });
    };
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
      layout = 
        <div>
          Placeholder
        </div>
      } else{
      layout = <div className ="deck">
      </div>}
    let kitty;
    if(this.state.pot.length === 0 && this.state.message === null){
      kitty = <div>Placeholder</div>
    } else if (this.state.message === null){
      kitty = <PlayingField cards={this.state.pot} />
    } else {
      kitty = <EndMessage message={this.state.message} dealNew={this.clickHandler}/>
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
            <div className="numCards">
              My Cards Remaining: {this.state.handLength1}
            </div>
          </div>
          <div className="play-field">
            {kitty}
          </div>
          <div className="player-hand east-hand">
            {layout}
            <div className="numCards">
              Opponent Cards Remaining: {this.state.handLength2}
            </div>
            </div>
        </div>
        <div className="footer">
          <div className="myChest">
            My Chest: {this.state.chestLength1}
          </div>
          <div className="opponentChest">
            Opponent Chest: {this.state.chestLength2}
          </div>
        </div>
    </div>
    
    )
  };
}

export default Table;