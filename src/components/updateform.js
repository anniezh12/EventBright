
import React from 'react';
import { connect } from 'react-redux';
import updateEvent from '../actions/updateevent'


 class UpdateForm extends React.Component{
 constructor(props){
   super(props);
   this.state={
     id:props.formValues.currentId,
     name:props.formValues.currentName,
     city:props.formValues.currentCity,
     date:props.formValues.currentDate,
   }
 }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    })
  }

 handleOnSubmit = (event) => {
   event.preventDefault();
   console.log("In handle submit",this.state);
   this.props.updateEvent(this.state);
     }

  render(){

  return(
      <div>

      <h3>Updating...</h3>

      <div className="container jumbotron">
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
  return { events: state.events };
   }


export default connect(mapStateToProps,{updateEvent})(UpdateForm);
