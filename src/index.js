import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import eventsReducers from './reducers/eventsReducers'

const store = createStore(eventsReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <div>
         <Provider store={store}>
            <App />
         </Provider>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
