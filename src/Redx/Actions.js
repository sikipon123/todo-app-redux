import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  EDIT_TASK,
  NEW_TASK
} from "./actions-types";

export const addTask = payload => ({
  type: ADD_TASK,
  payload
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  payload: id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  payload: id
});

export const editTask = (id,input) => ({
  type: EDIT_TASK,
  payload: {
    id,
    input
  }
});

export const newtask = newinput => ({
  type: NEW_TASK,
  payload: newinput
})