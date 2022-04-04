import { ADD_NAME } from "../types";

export const addName = (name, lastName) => (dispatch) =>
  dispatch({
    type: ADD_NAME,
    payload: { name, lastName },
  });
