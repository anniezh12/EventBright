import React from 'react';
import AllEvents from '../components/allevents'

const Home = () => {
    return (
      <div className="jumbotron">

      Welcome to your Personal Eventbrite App!
      Finally you can not only see all your events on Eventbrite but also can add
      your own events to keep track of your upcoming events,
      <AllEvents/>
        <div >
            <img src="pengu3.gif" alt="Penguin walking" width='200' height='170'/>
        </div>
    </div>
  )}
export default Home;
