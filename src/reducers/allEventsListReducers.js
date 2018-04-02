export default function allEventslistsReducers(state={items:[]},action){

  switch(action.type)
  {
    case 'INCREASE_COUNT':
    console.log("Current state.items length %s", state.items.length);
      //return Object.assign({},state,{allEvents: state.allEvents.concat(state.allEvents.length +1)})
          return state.items.concat(state.items.length+1);
      default:
      return state;

  }
}
