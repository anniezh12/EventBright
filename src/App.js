import React, { Component } from 'react';

import './App.css';
import Event from './event.js'
import EventsFromApi  from './eventsfromapi.js';

import { BrowserRouter as Router, Route , NavLink} from 'react-router-dom'; //to user react routes
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs'
import EventDisplayedUsingRedux from './EventDisplayedRedux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Event Be Right</h1>
        </header>

                  <Router>
                   <div>
                   <NavBar/>
                      <Route exact path="/home" component={Home}/>
                      <Route  path="/about" component={About}/>
                      <Route  path="/contactus" component={ContactUs}/>
                   </div>
                 </Router>
           <Event  />
           <EventsFromApi />
           <EventDisplayedUsingRedux store={this.props.store}/>
      </div>
    );
  }
}


export default App;
