import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import AppFromFirstFrontend from 'application_a/SayHelloFromA';

ReactDOM.render(
  <>
    <AppFromFirstFrontend/>
    <App/>
  </>, 
  document.getElementById('root')
);