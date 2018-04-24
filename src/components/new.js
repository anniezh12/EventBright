import React,{Component} from 'react';

export default class EventList extends Component {
  constructor(props){

    super(props);
    this.state={
      likeCounter:0

  }
}
  incrementCounter = (event) =>
  {
    event.preventDefault();
    this.setState({
      likeCounter: this.state.likeCounter+1
    })
  }
  render(){
    const  event=this.props.props

    console.log(this.props)
    return(
      <div>
         {event.name} -  {event.city} -  {event.date}

          <button value={event.id} className="btn-link" onClick={(e)=>this.handleUpdateEvent(e,event.name,event.city,event.date)}>Update </button>

          <button value={event.id} className="btn-link" onClick={this.handleDeleteEvent}>Delete </button>

          <button value={event.id} className="btn-link" onClick={this.incrementCounter} >Like  </button>-{this.state.likeCounter}


    </div>)

  }

}