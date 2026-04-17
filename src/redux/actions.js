// actions.js: Створює події які мають відбутись на вашому сайті.

import { nanoid } from "nanoid";
import { ACTION_TYPES } from "./constants";
import { FILTER_TYPES } from "./constants";

// Return type,payload
export const addTodo = text => {
  return {
    type: ACTION_TYPES.add,
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const removeTodo = id => {
  return {
    type: ACTION_TYPES.remove,
    payload: id,
  };
};

export const changeTodo = id => {
  return {
    type: ACTION_TYPES.change,
    payload: id,
  }
}

export const filterAll = (filterType) => {
  return {
    type: FILTER_TYPES.setFilter,
    payload: filterType
  }
} //! чому ми передаємо filterType та навіщо