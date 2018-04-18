import React,{Component} from 'react';
import EventForm from './eventform.js'
const EventsLists = ({events}) =>(

    <div>
    {events.map((event,index)=>{
      return (<li key={index}> {event.name} - {event.city} - {event.date}</li>)
      }
 )}
    </div>

);

export default class Event extends Component{
  constructor(props){
    super(props);
    this.state={
      events:[],//an empty array to hold future events
        }
  }

  addEvents = (event) =>{
  //  console.log("A",event)
  this.setState({
    events:[...this.state.events,event,]
   })
  }


  render()  {

    return(
     <div className="jumbotron">

        Number of Events Added :{this.state.events.length}
        <br/>
        <EventForm onSubmit={this.addEvents}/>
        <EventsLists events={this.state.events}/>
      </div>
    )

  }
}
