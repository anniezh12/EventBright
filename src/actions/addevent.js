import 'isomorphic-fetch';
  let URL = 'http://localhost:3000';
// Adding Event
export function addEvent(currentEvent, history) {
      return (dispatch) => {
        return fetch(`${URL}/events`,{
        method: 'post',
        body:JSON.stringify(currentEvent),
        headers : {
           'Accept': 'application/json',
       'Content-Type': 'application/json'

         }
        })
        .then(resp => { return resp.json()
            })
        .then(event => {
          history.push('/home')
          dispatch({
           type: 'ADD_EVENT',
           event: event,
          error: 'Successful creation of Event'})
        }
         )
         .catch((errors) => dispatch({
              type:'ERROR_MESSAGE',
              error: "Not Successful"
            }))
}}

// display function
export function displayEvents(){
  return (dispatch) =>{
    return fetch(`${URL}/events`)
    .then(resp => resp.json())
    .then(events => dispatch({type: 'DISPLAY_EVENTS',events: events}))
    .catch(errors => dispatch({
       type:'ERROR_MESSAGE',
      error: "Unsuccessful Get Request"}))
    }
  }
