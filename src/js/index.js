import 'whatwg-fetch';
import { polyfill as promisePolyfill } from 'es6-promise';

import React from 'react';
import { hydrate, render } from 'react-dom';

import '../scss/index.scss';

import App from './App';

promisePolyfill();

const rootElement = document.getElementById('content');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

document.body.classList.remove('loading');
