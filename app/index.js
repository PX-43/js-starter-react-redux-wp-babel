import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Container from './components/Container';

injectGlobal`
  * {
    margin:0;
   }
   
   /*To get more fonts, download from: http://google-webfonts-helper.herokuapp.com/fonts*/
   
   @font-face {
    font-family: 'raleway';
    src:  url('fonts/raleway-v12-latin-regular.woff2') format('woff2'),
          url('fonts/raleway-v12-latin-regular.woff') format('woff');
  }
   
  body {
    font-family: 'raleway', Helvetica, Arial, sans-serif;
  }
  `;

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Container />
    </div>
  </Provider>,
  document.getElementById('main')
);


