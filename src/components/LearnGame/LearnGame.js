import React from 'react';
import './LearnGame.css';
import { Link } from 'react-router-dom';

function LearnGame(props){

  return(
    <div className="about">
      <h3>About War</h3>
      <p>The object of the game is to win all the cards of both players.  At the end of the game, one player will have all 52 cards in their possession.</p>
      <p>Play proceeds when you click on your deck.  This triggers yourself and your opponent to place a card in the field of play.  Once this occurs, the player who plays the highest card will take possession of both cards in their 'chest' and will then proceed to play another card.</p>
      <p>In the event that both players play a matching card, a war will be triggered.  Each player will put 3 cards into the field of play and then flip a fourth card.  Whichever of the two cards is higher, wins the pot as in a normal play, except they win all ten cards involved in the war as opposed to just the normal two.</p>
      <h4>Good luck in the wars to come!</h4>
      <Link to='/landing'>
        <button>Back</button>
      </Link>
    </div>
  )
};

export default LearnGame;