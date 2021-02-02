import { GET_TASKS, UPDATE_TASKS } from './actionTypes'

export const fetchGetTasksAC = () => {
  return dispatch => {
    fetch("https://my-json-server.typicode.com/ChebotarevKonstantin/myGame/game")
      .then(res => res.json())
      .then(tasks => dispatch(getTasksAC(tasks)))
  }
};

export const getTasksAC = (payload) => ({
  type: GET_TASKS,
  payload
});

export const updateTasksAC = (payload) => ({
  type: UPDATE_TASKS,
  payload
});

