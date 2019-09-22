import ReactDOM from 'react-dom';
import React from 'react';

import 'normalize.css';
import 'core-js/stable';

import HelloWorld from './HelloWorld';

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('app-container')
);
