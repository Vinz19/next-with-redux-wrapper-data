import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import thunk from "redux-thunk";

/*export const makeStore = () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  return store;
};*/

// initial states here
const initialState = {};

//CREATE STORE

const store = () => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export const wrapper = createWrapper(store);
