import React, { Component } from 'react';

import './App.css';
import Event from './event.js'
import EventsFromApi  from './eventsfromapi.js';
import { connect } from 'react-redux';

class App extends Component {

   handleOnClick(){
     this.props.store.dispatch({
       type:'INCREASE_COUNT',
     })
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to EventBright</h1>
        </header>

        <button onClick={(e)=>this.handleOnClick(e)}>
            Click
        </button>
        <p>{this.props.store.getState().items.length}</p>
           <Event  />
           <EventsFromApi />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {items: state.items}
}
export default connect(mapStateToProps)(App);
