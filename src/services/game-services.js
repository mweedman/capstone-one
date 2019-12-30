import config from '../config';

let returnedCards;

const receiveHand = function(){
   return fetch(`${config.API_ADDRESS}/game`)
    .then(res => res.json())
    .then(cards => returnedCards = cards.cards);
};


export default {
  receiveHand,
  returnedCards
  };

