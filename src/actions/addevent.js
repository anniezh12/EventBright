export const addEvent = (currentEvent) => {
  return {
    type: 'ADD_EVENT',
    events: currentEvent
  }
}
