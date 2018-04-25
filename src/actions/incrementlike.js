const URL= "http://localhost:3000/users/likes"
export function incremetLike(event)
{
  return (dispatch) => {
    return fetch(`${URL}`)
    .then(resp => resp.json())
    .then(event => dispatch({
      type: 'INCREMENT_LINK',
      event: event
    }))
  }


}
