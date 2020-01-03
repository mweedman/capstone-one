import config from '../config';


const receiveHand = function(){
   return fetch(`${config.API_ADDRESS}/game`)
    .then(res => res.json())
    .then(cards => cards.cards);
};

const sendCard = (obj, hand) => {
  return fetch(`${config.API_ADDRESS}/game/play`,
  {
    method: 'POST',
    headers: {
      //Authorization //
      'content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
  .then(res => res.json())
  //splice from hand array
  //move card to play field
  .then(card => card);
};


export default {
  receiveHand,
  sendCard
  };

