import React from 'react';
import {allEvents} from '../data.js';
const About = () => {

  return (
    <div className="jumbotron">

          {allEvents.map((event)=>(
          <div>{event.name}-{event.date}</div>
        ))}
    </div>
  )}

export default About;
