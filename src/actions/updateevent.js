import 'isomorphic-fetch';
let URL = 'http://localhost:3000/events'
export default function updateEvent(event){
console.log("resp",event.id);
  return dispatch => {

    return fetch(`${URL}/${event.id}`,{
     method: 'put',
     body: JSON.stringify(event),
     headers:{
       'Accept': 'application/json',
       'Content-Type':"application/json"
     }
      })
    .then(resp => console.log("pool=",resp))
    .then(events=> dispatch({
      type:'UPDATE_EVENT',
      events: events
    }))
  }
}
