import 'isomorphic-fetch';
  let URL = 'http://localhost:3000';

export function addEvent(currentEvent) {

      return (dispatch) => {
        return fetch(`${URL}/events`,{
        method: 'post',
        body:JSON.stringify(currentEvent),
        headers : {
           'Accept': 'application/json',
       'Content-Type': 'application/json'

         }
        })
        .then(resp => {
              return resp.json()
            })
        .then(events => dispatch({
           type: 'ADD_EVENT',
           events: events})
         )
       .catch(errors => {
         console.log(errors)
       })
}}

// display function
export function displayEvents(){
  return (dispatch) =>{
    return fetch('${URL}/events')
    .then(resp => resp.json())
    .then(events => dispatch({type: 'DISPLAY_EVENTS',events: events}))
    }
  }
