import React from 'react';

function EndMessage(props){
  return(
    <div  className='messageBox'>
      {props.message}
      <button onClick={props.dealNew}>Deal New Game</button>
      <button id="logout">Log Out</button>
      <button id='landing'>Home</button>
    </div>
  );
};

export default EndMessage;