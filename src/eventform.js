import React,{Component} from 'react';

export default class EventForm extends Component{
  constructor(props){
    super(props);
    this.initialState={
      name:"",
      city:"",
      date:""
    }
    this.state = this.initialState;
  }
  handleChange=(event)=>{

    this.setState({
[event.target.name]: event.target.value //will assign all the input to its related state
    })
  }

   handleSubmit = (event) =>{
     event.preventDefault();
    this.props.hello(event)

     
     console.log("you are in Submit no 2",this.state)

   }
  render()
  {
    return(
      <div>
         <form onSubmit={this.handleSubmit}>
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
