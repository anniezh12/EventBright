let URL = 'http://localhost:3000/events'
export default function deleteEvent(event,eventId){

  return dispatch => {
    console.log(event.id)
    return fetch(`${URL}/${eventId}`,{
     method: 'delete'})
    .then(resp => resp.json())
    .then(events=> dispatch({
      type:'DELETE_EVENT',
      events: events
    }))
  }
}
