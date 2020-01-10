import React from 'react';
import Card from './Card';

function PlayingField(props) {

const firstCard = [...props.cards][0];
const secondCard = [...props.cards][1];



const firstCardId = `suit${firstCard[0]}value${firstCard[1]}`;
const secondCardId = `suit${secondCard[0]}value${secondCard[1]}`;

console.log('First card: ', firstCardId);
console.log('Second card: ', secondCardId);
  //cards appear in field of play.  remain for 1.5 seconds and then move to war chest for corresponding player
    return(
      <div className="fieldOfPlay">
        <div className='playerCard'>
          <Card id={firstCardId} />
        </div>
        <div className='pcCard'>
          <Card id={secondCardId} />
        </div>  
      </div>
    );
};

export default PlayingField;