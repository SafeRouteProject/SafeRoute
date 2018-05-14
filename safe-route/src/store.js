import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import user from "./ducks/user";
import groups from "./ducks/groups";
import location from "./ducks/location";

const store = createStore(
  combineReducers({ user, groups, location }),
  applyMiddleware(promiseMiddleware())
);

export default store;
