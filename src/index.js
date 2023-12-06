import React from 'react';
import createRoot from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';

createRoot.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
