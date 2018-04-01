import React, { Component } from 'react';

import './App.css';
import Event from './event.js'
import EventsFromApi  from './eventsfromapi.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to EventBright</h1>

        </header>
        <EventsFromApi />
        <Event  />
      </div>
    );
  }
}

export default App;
