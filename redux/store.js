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
const initialState = {}

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  initialState, reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
