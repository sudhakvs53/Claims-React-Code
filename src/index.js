import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

render(
  <div>Hello World</div>,
  document.getElementById('app')
);