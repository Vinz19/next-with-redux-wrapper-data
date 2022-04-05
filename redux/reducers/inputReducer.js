import { ADD_NAME } from "../types";

 const initialState = {
         name: "",
         lastName: "",
    
    }

const inputReducer = (state = initialState, action, payload) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: payload.name,
        lastName: payload.lastName,
      };
    default:
      return state;
  }
};

export default inputReducer;
