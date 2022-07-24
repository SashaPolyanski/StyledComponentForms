import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { store } from './bll/store';

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Helvetica Neue,serif;
  overflow: hidden;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HashRouter>
      <Global /> <App />
    </HashRouter>
  </Provider>,
);
