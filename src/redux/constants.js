// constants.js: Запобігає помилкам у типах екшенів.

// import { activeTodo } from "./selectors";

export const ACTION_TYPES = {
  add: "todos/addTodo",
  remove: "todos/removeTodo",
  change: "todos/changeTodo"
};

export const FILTER_TYPES = {
  setFilter: "filters/setFilter",
  all: "all",
  active: "active",
  completed: "completed"
}

//! чому тут filters/ а не щось інше, звідки береться назва