import { GET_TASKS, UPDATE_TASKS } from '../actionTypes'

export function taskReducer(state = [], action) {
  switch (action.type) {

    case GET_TASKS:
      return [...state, ...action.payload]
    case UPDATE_TASKS:
      return [...state, action.payload]
    default:
      return state
  }
}
