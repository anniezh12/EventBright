import React,{Component} from 'react';
import 'isomorphic-fetch';


const MY_TOKEN = "D7LP3OXBFAIVNHU5XEZE";
const URL=`https://www.eventbriteapi.com/v3/users/me/?token=${MY_TOKEN}`;

const CurrentUserEventsLists = ({events}) => (
  <div>
   {events ?
    events.map((event,key) => {return (
                        <li className="list-group-item " key={key}><b> {event.name.text}</b>
                              <br/>{event.description.text}
                              <br/>Time: {event.start.local}
                              <br/> Time Zone :{event.start.timezone}
                              <br/> Price :{}
                              <br/>Tickets Left: {event.capacity}
                          </li>)
                        }) : "No Event by you or bad request to Api, Please check your token"}



  </div>
)

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
    }

  componentDidMount(){

    //The following fetch will fetch from the Api and will get only current user info
    fetch(`https://www.eventbriteapi.com/v3/users/me/owned_events/?token=${MY_TOKEN}`)
    .then(response => response.json())
    .then(resp => {this.setState({eventsByCurrentuser: resp.events})})
    .catch(errors => {
      console.log("you Got an error");
    });

  }

  render()
  {
    return(
      <div className="jumbotron container" >
        <h4>All Events by {this.state.user}!</h4>

          <ol>
           <CurrentUserEventsLists events={this.state.eventsByCurrentuser}/>
           </ol>
      </div>
    )
  }
}
