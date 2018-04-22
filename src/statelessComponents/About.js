import React from 'react';
import {allEvents} from '../data.js';
const About = () => {

  return (
    <div className="jumbotron container">

          {allEvents.map((event,index)=>(
          <div className="list-group-item" key={index}>
          {event.name}-{event.date}
          </div>
        ))}
    </div>
  )}

export default About;
