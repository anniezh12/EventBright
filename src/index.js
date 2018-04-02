import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import allEventslistsReducers from './reducers/allEventsListReducers.js'
import { BrowserRouter as Router, Route , NavLink} from 'react-router-dom'; //to user react routes
import Home,{About,ContactUs} from './home.js'
const store = createStore(allEventslistsReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
<Provider store={store}>
   <Router>
     <div>
        <NavLink to="/home" >Home  </NavLink>
        <NavLink to="/about" >About  </NavLink>
        <NavLink to="/contact" >Contact Us  </NavLink>
        <Route exact path="/home" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route  path="/contact" component={ContactUs}/>

        </div>
     </Router>
    //  <App store={store}/>

     </Provider>,
   document.getElementById('root'));
registerServiceWorker();
