const initialState = {
    events:[],
    count:0
}
export default function eventsReducers(state= {events:[]},action){

  switch(action.type)
  {
    case 'ADD_EVENT':
    return {...state,events:[...state.events,action.events]}
      //return ...state, events:state.events.concat(action.events)
      //return Object.assign({},state,{events:state.events.concat(action.events)})
    default:
      return state;

  }
}
