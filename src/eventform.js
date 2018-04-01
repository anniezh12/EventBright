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
     console.log(this.state)
     event.preventDefault();
    this.props.onSubmit(this.state);
console.log(this.state)

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

      </div>
    )
  }
}
