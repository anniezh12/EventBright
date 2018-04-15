import React,{Component} from 'react';
import {displayEvents} from '../actions/displayevents';
import {connect} from 'react-redux';

class AllEvents extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      events:[],
    }
  }
  handleOnClick = (e)=>{
    this.props.displayEvents(this.state);
  }
  render()
  {

    let railsApiEvents = this.props.events.map((event,index) =>
      <li key={index}> - Name:{event.name} - City: {event.city} - Date: {event.date}</li>);
    return(
    <React.Fragment>
       <br/> <button onClick={this.handleOnClick}>Click Me</button>

       {railsApiEvents}
    </React.Fragment>
)}
}

const mapStateToProps = (state) =>{
  return {events: state.events}
 }

export default connect(mapStateToProps,{displayEvents})(AllEvents);
