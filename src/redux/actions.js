// actions.js: Створює події які мають відбутись на вашому сайті.

import { nanoid } from "nanoid";
import { ACTION_TYPES } from "./constants";

// Return type,payload
const addTodo = text => {
  return {
    type: ACTION_TYPES.add,
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

const removeTodo = id => {
  return {
    type: ACTION_TYPES.remove,
    payload: id,
  };
};

const changeTodo = id => {
  return {
    type: ACTION_TYPES.change,
    payload: id,
  }
}