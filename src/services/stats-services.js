import config from '../config';


const receiveStats = function(){
   return fetch(`${config.API_ADDRESS}/stats`)
    .then(res => res.json())
    .then();
};


export default {
  receiveStats
  };