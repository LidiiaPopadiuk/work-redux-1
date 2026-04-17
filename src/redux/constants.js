// constants.js: Запобігає помилкам у типах екшенів.

export const ACTION_TYPES = {
  add: "todos/addTodo",
  remove: "todos/removeTodo",
  change: "todos/changeTodo"
};

export const FILTER_TYPES = {
  all: filters/filterAll,
  active: filters/filterActive,
  completed: filters/filterCompleted,
}

//! чому тут filters/ а не щось інше, звідки береться назва