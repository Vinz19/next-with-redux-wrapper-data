import { DECREMENT, INCREMENT } from "../types";

//Action Creator
export const incrementCounter = () => ({
  type: INCREMENT,
});

export const decrementCounter = () => ({
  type: DECREMENT,
});
