import config from '../config';

export default {
  receiveHand: function(){
    fetch(`${config.API_ADDRESS}/game`)
    .then(hand => hand.json())
    .then(handJson => console.log(handJson));
  }
};

