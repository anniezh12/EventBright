import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import eventsReducers from './reducers/eventsReducers'
import thunk from 'redux-thunk';
const store = createStore(eventsReducers,applyMiddleware(thunk));
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <div>
         <Provider store={store}>
            <App />
         </Provider>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
