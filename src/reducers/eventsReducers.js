
export default function eventsReducers(state= {events:[],error:""},action){

  switch(action.type)
  {
    case 'ADD_EVENT':

      return {...state,events:[...state.events,action.event],error:action.error}

    case 'DISPLAY_EVENTS':

      return {...state,events:action.events,error:action.error}

    case 'UPDATE_EVENT':

     return {...state,events:action.events}

    case 'DELETE_EVENT':

         return {...state,events: action.events }

    case 'ERROR_MESSAGE':
       return {...state,error:action.error}
    default:

      return state;

  }
}
