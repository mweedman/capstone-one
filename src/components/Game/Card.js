import React from 'react';
import './Card.css';

export default function Card(props) {
  return(
    <div className="card-wrapper" onClick={e => {
      console.log(e.target);
      props.playCard(e, {suit: props.suit, value: props.value})}
      }>
      <div className="card">
        <span>{props.suit}</span>
        <span>{props.value}</span>
      </div>
    </div>
  )
}