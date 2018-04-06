
import React from 'react';
import { connect } from 'react-redux';

 class EventDisplayedUsingRedux extends React.Component{

  handleOnClick =()=>{
    this.props.store.dispatch({
      type:'INCREASE_COUNT',
    })
 }
  render(){

    return(
      <div>
      <h3>Using Redux</h3>
      {this.props.count}
      <button onClick={this.handleOnClick}>
      Click Me
      </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(EventDisplayedUsingRedux);
