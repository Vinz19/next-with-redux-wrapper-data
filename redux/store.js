import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";
import thunk from "redux-thunk";

export const makeStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return store;
};

export const wrapper = createWrapper(makeStore);
