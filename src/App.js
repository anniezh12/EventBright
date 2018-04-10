import React, { Component } from 'react';

import './App.css';
import Event from './components/event.js'
import EventsFromApi  from './components/eventsfromapi.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //to user react routes
import NavBar from './statelessComponents/NavBar';
import Home from './statelessComponents/Home';
import About from './statelessComponents/About';
import ContactUs from './statelessComponents/ContactUs'
import EventDisplayedUsingRedux from './components/EventDisplayedRedux'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><img src="pengu.gif" width='50px' height='50px'/>&nbsp;&nbsp;Event Be Right! </h1>

        </header>

                  <Router>
                   <div>
                   <NavBar/>
                      <Route exact path="/home" component={Home}/>
                      <Route exact path="/about" component={About}/>
                      <Route exact path="/event" component={Event}/>
                      <Route exact path="/eventfromapi" component={EventsFromApi}/>
                      <Route  exact path="/contactus" component={ContactUs}/>
                      <Route  exact path="/redux" render={()=><EventDisplayedUsingRedux store={this.props.store}/>}/>
                   </div>
                 </Router>




      </div>
    );
  }
}


export default App;
