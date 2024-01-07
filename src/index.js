import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './tailwind.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Redux Persist için ekledik
import store, { persistor } from './redux/store'; // Redux Persist ile güncellenmiş store ve persistor ekledik

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
