import React,{Component} from 'react';
import 'isomorphic-fetch';

const MY_TOKEN = "X6NO2JJY4ZSUVEJC3OIN";
const URL=`https://www.eventbriteapi.com/v3/users/me/?token=${MY_TOKEN}`;


export default class EventsFromApi extends Component{

constructor(){
  super();
  this.state = {
    eventsByCurrentuser : [],
    user: ''

  }
}

componentWillMount(){
   // The following fetch will fetch from the Api and will get only current user info
    fetch(URL)
    .then(response => response.json())
    .then(res => this.setState({user: res.name}))
    // .then(user => this.setState({user: user.name}));

  }

  componentDidMount(){

    //The following fetch will fetch from the Api and will get only current user info
    fetch(`https://www.eventbriteapi.com/v3/users/me/owned_events/?token=${MY_TOKEN}`)
    .then(response => response.json())
    .then(resp => {this.setState({eventsByCurrentuser: resp.events})});

  }

  render()
  {

    let currentUserEventsLists =this.state.eventsByCurrentuser.map((event,key) => {return (
                        <li key={key}><b> {event.name.text}</b>
                              <br/>{event.description.text}
                              <br/>Time: {event.start.local}
                              <br/> Time Zone :{event.start.timezone}
                              <br/> Price :{}
                              <br/>Tickets Left: {event.capacity}
                          </li>)
                        })

    return(
      <div className="bg-warning text-white" >
        <h4>All Events by {this.state.user}!</h4>

          <ol>
           {currentUserEventsLists}
           </ol>
      </div>
    )
  }
}
//
// <a  className= "btn-primary" href=url>My Site</a>&nbsp;
// <a  className= "btn-primary" href="https://www.eventbrite.com/">By Location</a>&nbsp;
// // <a  className= "btn-primary" href="https://www.eventbrite.com/">By Event</a>
