import React,{Component} from 'react';
import {displayEvents} from '../actions/displayevents';
import {connect} from 'react-redux';
import updateEvent from '../actions/updateevent';
import deleteEvent from '../actions/deleteevent';
import UpdateForm from '../components/updateform';


class AllEvents extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      events:[],
      showForm: false,
      currentId:0,
      currentName:'',
      currentCity:'',
      currentDate:''
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.events !== nextProps.events && nextProps.events
  }

  handleOnClick = (e)=>{
    this.props.displayEvents(this.state);

  }

  handleDeleteEvent = (event) => {
         let eventId = event.target.value;
         this.props.deleteEvent(event,eventId);
  }

  handleUpdateEvent = (event,name,city,date) => {
        this.setState({
           showForm:true,
           currentId:event.target.value,
           currentName: name,
           currentCity:city,
           currentDate:date
          });
            //this.props.updateEvent(event,eventId);
          console.log("This state",this.state);
          //this.props.history.push(`localhost:3000/events/${eventId}`)
  }

  render()
  {
   let event = this.props.events.first
    let railsApiEvents = this.props.events.map((event,index) =>

      <li key={index}>ID-{event.id} - Name:{event.name} - City: {event.city} - Date: {event.date}

          <button value={event.id} onClick={(e)=>this.handleUpdateEvent(e,event.name,event.city,event.date)}>Update </button>

          <button value={event.id} className="btn-danger" onClick={this.handleDeleteEvent}>Delete {event.id}</button>

      </li>);

    return(

    <React.Fragment>
       <br/> <button className="btn-primary" onClick={this.handleOnClick}>Display All</button>
        {  this.state.showForm ? <UpdateForm formValues={this.state}/> : null}
          {railsApiEvents}
    </React.Fragment>
)}
}

const mapStateToProps = (state) =>{
  return {events: state.events}
 }

export default connect(mapStateToProps,{displayEvents,updateEvent,deleteEvent})(AllEvents);
