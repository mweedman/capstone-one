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

const sendCard = () => {
  return fetch(`${config.API_ADDRESS}/game`,
  {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${token}`,
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(cards => cards.cards);
};


export default {
  receiveHand,
  sendCard
  };

