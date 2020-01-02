import React from 'react';
import './Card.css';

export default function Card(props) {
return(
  <div className="card-wrapper">
    <div className="card">
      <span>{props.suit}</span>
      <span>{props.value}</span>
    </div>
  </div>
)
}