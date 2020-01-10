import React from 'react';

export default class StatsPage extends React.Component{

  render(){
    return(
      <div>
        <h3>STATISTICS</h3>
        <div className="stats-container">
            <div>USERNAME:</div>
            <div>WINS: </div>
            <div>GAMES PLAYED: </div>
        </div>  
      </div>
    );
  }
}