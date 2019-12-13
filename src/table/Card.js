import React from 'react';
import cardMethods from '../services/Card-Methods'
import './Card.css';

export default function Card(props) {
return(
  <div className="card">
    <span>{props.suit}</span>
    <span>{cardMethods.cardNames[props.value]}</span>
  </div>
)
}