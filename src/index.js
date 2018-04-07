import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route , NavLink} from 'react-router-dom'; //to user react routes
import NavBar from './NavBar';
import registerServiceWorker from './registerServiceWorker';
import allEventslistsReducers from './reducers/allEventsListReducers.js'
const store = createStore(allEventslistsReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <div>
         <Provider store={store}>
            <App store={store}/>
         </Provider>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
