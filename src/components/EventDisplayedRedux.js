
import React from 'react';
import { connect } from 'react-redux';
import {addEvent} from '../actions/addevent.js'
import { withRouter } from 'react-router-dom';


 class EventDisplayedUsingRedux extends React.Component{
 constructor(props){
   super(props);
   this.state={
     name:'',
     city:'',
     date:'',
     likes:0
   }
 }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    })
  }

 handleOnSubmit = (event) => {
   console.log(this.props)
   event.preventDefault();
   this.props.addEvent(this.state, this.props.history);
   this.setState({
     name:'',
     city:'',
     date:'',

   })
     }



  render(){

    const eventLists = this.props.events.map((el,i)=><li key={i}>{el.name}</li>);

    return(

      <div className="jumbotron container">
      {this.props.error}
      {eventLists}
      <h3>Using Redux</h3>
      <div className="jumbotron container">
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

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.events,
          error: state.error};
   }


export default withRouter(connect(mapStateToProps,{addEvent})(EventDisplayedUsingRedux));
