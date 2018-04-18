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
      showForm: false
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

  handleUpdateEvent = (event) => {
         let eventId = event.target.value;
         this.setState({showForm:true});
         console.log("my prop id",eventId);
         console.log("my prop",this.props);
         //this.props.updateEvent(event,eventId);
        //  console.log("my prop",eventId);
          //this.props.history.push(`localhost:3000/events/${eventId}`)
  }

  render()
  {
   let event = this.props.events.first
    let railsApiEvents = this.props.events.map((event,index) =>
      <li key={index}> - Name:{event.name} - City: {event.city} - Date: {event.date}
      <button value={event.id} onClick={(e)=>this.handleUpdateEvent(e)}>Update {event.id}</button>
      <button value={event.id} className="btn-danger" onClick={this.handleDeleteEvent}>Delete {event.id}</button>

      </li>);
    return(
    <React.Fragment>
       <br/> <button className="btn-primary" onClick={this.handleOnClick}>Display All</button>
        {  this.state.showForm ?

            <div className="jumbotron">
                  <form onSubmit={this.handleOnSubmit}>
                  <div className="form-inline">

                        Name:<input type="text" className="form-control" name="name" placeholder="Name" value={this.state.name} onChange={(event)=>{this.handleOnChange(event)}}/>
                        <br/>
                        City:    <input type="text" className="form-control" name="city" placeholder="City" value={this.state.city} onChange={(event)=>{this.handleOnChange(event)}}/>
                        <br/>
                        Date:    <input type="text" className="form-control" name="date"  placeholder="mm/dd/yyyy" value={this.state.date} onChange={(event)=>{this.handleOnChange(event)}}/>
                        <br/>
                        <input type="submit"/>
                        </div >
                  </form>
              </div>
          : null
        }
       {railsApiEvents}
       <UpdateForm props={event}/>
    </React.Fragment>
)}
}

const mapStateToProps = (state) =>{
  return {events: state.events}
 }

export default connect(mapStateToProps,{displayEvents,updateEvent,deleteEvent})(AllEvents);
