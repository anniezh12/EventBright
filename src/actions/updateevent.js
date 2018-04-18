let URL = 'http://localhost:3000/events'
export default function updateEvent(event,eventId){
console.log("resp", eventId);
  return dispatch => {

    return fetch(`${URL}/${eventId}`,{
     method: 'patch',



     headers:{
       'Accept': 'application/json',
       'Content-Type':"application/json"
     }
      })
    .then(resp => console.log(resp))
    .then(events=> dispatch({
      type:'UPDATE_EVENT',
      events: events
    }))
  }
}