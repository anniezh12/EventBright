
export default function eventsReducers(state= {events:[]},action){

  switch(action.type)
  {
    case 'ADD_EVENT':
      return {...state,events:[...state.events,action.events]}
    case 'DISPLAY_EVENTS':
      return {...state,events:action.events}
    case 'UPDATE_EVENT':

    case 'DELETE_EVENT':
       //state.events = state.events.filter(event => event.id !== action.id)
        return {...state,events: action.events }
    default:
      return state;

  }
}