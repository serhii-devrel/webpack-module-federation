import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import AppFromFirstFrontend from 'frontend-app-first/AppFromFirstFrontend';

ReactDOM.render(
  <>
    <AppFromFirstFrontend/>
    <App/>
  </>, 
  document.getElementById('root')
);