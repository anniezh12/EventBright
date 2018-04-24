import React,{Component} from 'react';
import {displayEvents} from '../actions/displayevents';
import {connect} from 'react-redux';
import updateEvent from '../actions/updateevent';
import deleteEvent from '../actions/deleteevent';
import UpdateForm from '../components/updateform';
import EventList from './new'

const errorStyle = {
  color: 'red'
}

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
      currentDate:'',
      likeCounter:0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.events !== nextProps.events && nextProps.events
  }

  handleOnClick = (e) => {
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

  }

  incrementCounter = (event) =>
  {
    event.preventDefault();
    this.setState({
      likeCounter: this.state.likeCounter+1
    })
  }


  render()
  {


    let railsApiEvents = this.props.events.map((event,index) =>
      <div>
      <li className="list-group-item" key={index}>
      <EventList  props={event}/>
      </li>
      </div>

      );


    return(

    <React.Fragment>
    <div style={errorStyle}>{this.props.error}</div>
       <br/> <button className="btn-link" onClick={this.handleOnClick}>Display All</button>
        {  this.state.showForm ? <UpdateForm formValues={this.state}/> : null}
          {railsApiEvents}
    </React.Fragment>
)}
}

const mapStateToProps = (state) =>{
  return {events: state.events,
  error: state.error}
 }

export default connect(mapStateToProps,{displayEvents,updateEvent,deleteEvent})(AllEvents);
