import React from 'react';
import {allEvents} from '../data.js';
import  'isomorphic-fetch' ;

const MY_TOKEN = "476AHYPDV3DCSGSH4KXO";

class About extends React.Component  {

  constructor(){
    super();
    this.state={
      searchWord:""
    }
  }

  handleOnChange = (e) => {

    this.setState({
      searchWord: e.target.value
    })

  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    alert(`we are going to fetch data from external api${this.state.searchWord}`);
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${this.state.searchWord}/?token=${MY_TOKEN}`)
    .then(resp => console.log(resp))
    .then(categories => {

    })




  }
  render()
  {

  return (
    <div className="jumbotron container">

          {allEvents.map((event,index)=>(
          <div className="list-group-item" key={index}>
          {event.name}-{event.date}
          </div>
        ))}
        <p/>
        <form onSubmit={this.handleOnSubmit}>
        <input type="text" value={this.state.searchWord} onChange={this.handleOnChange} placeholder="Search an Event"/>
        <input type="submit" value="Search"/>
        </form>
    </div>
  )}
}

export default About;
