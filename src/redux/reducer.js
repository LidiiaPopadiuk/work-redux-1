import { ACTION_TYPES } from "./constants";
import { FILTER_TYPES } from "./constants";
import { combineReducers } from "redux";

// reducer.js: Логіка обробки (мозок нашого проекту).
const todos = [
  { id: 0, text: "Написати на редакс", completed: false },
  { id: 1, text: "Написати на редакс", completed: false },
  { id: 2, text: "Написати на редакс", completed: false },
];

const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case FILTER_TYPES.setFilter:
      return action.payload;

    // case FILTER_TYPES.active:
    //   return "active";

    // case FILTER_TYPES.completed:
    //   return "completed";

    default:
      return state;
  }
};

const todosReducer = (state = todos, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return [...state, action.payload];

    case ACTION_TYPES.remove:
      return state.filter(todo => todo.id !== action.payload);

    case ACTION_TYPES.change:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    //* АБО
    // case ACTION_TYPES.change:
    // return state.map(todo =>
    //   todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
    // );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer
})

//! combineReducers - комбінує два редюсера

export default rootReducer;

//! чому в мене в devtools не відображаються ліворуч події при видаленні
//! чи можна в js писати return та div якщо це ніби тільки в jsx можна робити