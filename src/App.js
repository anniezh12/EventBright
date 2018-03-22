import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './event.js'
import EventForm from './eventform.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to EventBright</h1>
          <img src="./%PUBLIC_URL%/logo.png%"  alt="monkey"/>
        </header>

        <Event />
        <EventForm />

      </div>
    );
  }
}

export default App;
