import React from 'react';
import {allEvents} from './data.js';
const About = () => {

  return (
    <div>

          {allEvents.map((event)=>(
          <div>{event.name}-{event.date}</div>
        ))}
    </div>
  );
}

export default About;
