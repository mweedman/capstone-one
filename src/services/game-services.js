import config from '../config';
import TokenService from './token-services';

const token = TokenService.getAuthToken();

const receiveHand = function(){
  return fetch(`${config.API_ADDRESS}/game`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(cards => cards.cards);
};

const sendCard = (obj, hand) => {
  
  return fetch(`${config.API_ADDRESS}/game/play`,
  {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${token}`,
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

