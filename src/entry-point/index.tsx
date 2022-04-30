import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../container/app';
import configureStore from '../flow/store.config';

import './reset.scss';
import './variable.scss';
import './theme-custom.scss';

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

const history = createBrowserHistory();
const { store } = configureStore(history, {});

export { store };
export default () => (
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
