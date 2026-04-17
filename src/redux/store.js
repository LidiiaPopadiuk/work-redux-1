// store.js: Точка збору редаксу.

import { createStore } from "redux";

import todosReducer from "./reducer";

export const store = createStore(todosReducer);
