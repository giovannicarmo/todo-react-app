import { combineReducers } from "redux";
import todoReducers from "../components/todo/todoReducers"

const rootReducer = combineReducers({
  todo: todoReducers
});

export default rootReducer;
