const initialState = {
  count:0
}
export default function allEventslistsReducers(state= initialState,action){

  switch(action.type)
  {
    case 'INCREASE_COUNT':
      //return Object.assign({},state,{allEvents: state.allEvents.concat(state.allEvents.length +1)})
          return {count: state.count+2};
      default:
      return state;

  }
}
