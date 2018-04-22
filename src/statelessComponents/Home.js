import React from 'react';
import AllEvents from '../components/allevents'

const Home = () => {
    return (

    <div className="container jumbotron">
          Welcome to your Personal Eventbrite App!
          Finally you can not only see all your events on Eventbrite but also can add
          your own events to keep track of your upcoming events,
          <AllEvents/>

    </div>
  )}
export default Home;
