import 'isomorphic-fetch';
let URL="http://localhost:3000";
export function displayEvents(dispatch) {
  return  (dispatch) => {
    return fetch(`${URL}/events`)
    .then(resp=>{
      return resp.json()
     })
    .then(allEvents => {
      
      dispatch({
      type: 'DISPLAY_EVENTS',
      events: allEvents,
      error: 'Successful Request!' })
    }
    )
      .catch((errors) => dispatch({
        type:'ERROR_MESSAGE',
        error:"Not Successful"
      }));
}}
