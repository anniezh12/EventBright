import React,{Component} from 'react';
import EventForm from './eventform.js'

export default class Event extends Component{
  constructor(props){
    super(props);
    this.state={
      events:[],//an empty array to hold future events
        }
  }

  addEvents = (event) =>{
  this.setState({events:[...this.state.events,event], })
    console.log(this.state.events)

   //this.setState({events:[...this.state.events,event], })
  }


  render()  {
    debugger;
    const  {events} = this.state;
    let eventsList = events.map((event,index)=>{
      return <li key={index}>
               {event.name} - {event.city} - {event.date}
               </li>

    })
    return( <div>
      <h4>You can add events here</h4>
        <EventForm hello={this.addEvents}/>
        <ul>
        {eventsList}
        </ul>
      </div>
    )
  }
}
