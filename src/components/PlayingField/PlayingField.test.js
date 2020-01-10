import React from 'react';
import ReactDOM from 'react-dom';
import PlayingField from './PlayingField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayingField cards={[[1,3],[2,4]]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
