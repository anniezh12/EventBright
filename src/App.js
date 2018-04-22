import React, { Component } from 'react';

import './App.css';
import Event from './components/event.js'
import EventsFromApi  from './components/eventsfromapi.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //to user react routes
import NavBar from './statelessComponents/NavBar';
import Home from './statelessComponents/Home';
import About from './statelessComponents/About';
import ContactUs from './statelessComponents/ContactUs'

// import AllEvents from './components/allEvents'
import EventDisplayedUsingRedux from './components/EventDisplayedRedux'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                  <h1 className="App-title"><img src="pengu.gif" alt="Penguin Image" width='50px' height='50px'/>&nbsp;&nbsp;Event Be Right! </h1>
        </header>

                  <Router>
                   <React.Fragment>
                   <NavBar/>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/home" component={Home}/>
                      <Route exact path="/about" component={About}/>
                      <Route exact path="/event" component={Event}/>
                      <Route exact path="/eventfromapi" component={EventsFromApi}/>
                      <Route exact path="/contactus" component={ContactUs}/>
                      <Route exact path="/redux" render={()=><EventDisplayedUsingRedux store={this.props.store}/>}/>


<footer className="page-footer font-small stylish-color-dark pt-4 mt-4">
    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-4">

                <p>You cannot only View, Add, Update and Delete Events to your local API using this App but you can also see all your scheduled events at Eventbrite!</p>

              </div>
<hr class="clearfix w-100 d-md-none"/>
    <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
                <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item">
                <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
            </li>
        </ul>
    </div>
    <hr class="clearfix w-100 d-md-none"/>
    <div className="text-center">
        <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
                <a className="btn-floating btn-sm btn-fb mx-1">
                    <i className="fa fa-facebook"><img src="facebook.png" width="30px"/></i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-sm btn-tw mx-1">
                    <i className="fa fa-twitter"><img src="linkedin.png" width='33px' /> </i>
                </a>
            </li>
            <li className="list-inline-item">
                <a className="btn-floating btn-sm btn-gplus mx-1">
                    <i className="fa fa-google-plus"><img src="twitter.png" width='30px' /> </i>
                </a>
            </li>
          </ul>
       </div>

  </div>
</div>
</footer>
 
<hr class="clearfix w-100 d-md-none"/>
    <div className="footer">
        © 2018 Copyright
        <a href="http://www.eventbrite.com">  Eventberight.com  </a>
    </div>

         </React.Fragment>
                 </Router>
                 </div>

  )
  }
}


export default App;
