
export default function eventsReducers(state= {events:[]},action){

  switch(action.type)
  {
    case 'ADD_EVENT':
      return {...state,events:[...state.events,action.events]}
    case 'DISPLAY_EVENTS':
      return {...state,events:action.events}
    default:
      return state;

  }
}
