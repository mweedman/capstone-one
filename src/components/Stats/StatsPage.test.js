import React from 'react';
import ReactDOM from 'react-dom';
import Stats from './StatsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stats />, div);
  ReactDOM.unmountComponentAtNode(div);
});
