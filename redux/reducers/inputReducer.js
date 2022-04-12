import { ADD_NAME } from "../types";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  isAdded: false,
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload.user}
    case ADD_NAME:
      return {
        ...state,
        ...action.payload.user,
        isAdded: false,
      };
    default:
      return state;
  }
};

export default inputReducer;
