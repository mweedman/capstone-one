import React from 'react';
import ReactDOM from 'react-dom';
import EndMessage from './EndMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EndMessage message='test!'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
