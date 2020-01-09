import React from 'react';
import Card from './Card';

function PlayingField(props) {

  //cards appear in field of play.  remain for 1.5 seconds and then move to war chest for corresponding player
    return(
      <div>
        {/* <Card /> */}
        {props.cards}
      </div>
    );
};

export default PlayingField;