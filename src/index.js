import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

const store = configureStore();

store.subscribe(() => console.log(store.getState()));

store.subscribe(() => {
  localStorage['redux-store'] = JSON.stringify(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);