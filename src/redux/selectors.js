// selectors.js: Інструменти для спрощення отримання даних у компонентах.

import { FILTER_TYPES } from "./constants";

export const getTasks = state => state.todos; //! Спитатаи що це означає та навіщо todos
export const getFilter = state => state.filters;

export const activeTodo = state =>
  state.todos.filter(todo => todo.completed === false);

export const completedTodos = state =>
  state.todos.filter(todo => todo.completed === true);

export const filteredTodos = state => {
  switch (state.filters) {
    case FILTER_TYPES.all:
      return state.todos;
    case FILTER_TYPES.active:
      return activeTodo(state);
    case FILTER_TYPES.completed:
      return completedTodos(state);

    default:
      return state;
  }
};
