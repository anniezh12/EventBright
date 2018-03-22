import React,{Component} from 'react';

export default class EventForm extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      city:"",
      date:""
    }
  }
  handleChange=(event)=>{

    this.setState({
[event.target.name]: event.target.value //will assign all the input to its related state
    })
  }
  render()
  {
    return(
      <div>
         <form>
         Name:<input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><p/>
         City   :<input type="text" name="city" value={this.state.city} onChange={this.handleChange}/><p/>
         Date :<input type="text" name="date" value={this.state.date} onChange={this.handleChange}/><p/>
         <input type="submit" name="Add"/>
         </form>
         <h4>{this.state.name},{this.state.city},{this.state.date}</h4>
      </div>
    )
  }
}
