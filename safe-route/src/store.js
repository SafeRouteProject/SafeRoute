import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import users from "./ducks/user";
import groups from "./ducks/groups";

const store = createStore(
  combineReducers({ users, groups }),
  applyMiddleware(promiseMiddleware())
);

export default store;
