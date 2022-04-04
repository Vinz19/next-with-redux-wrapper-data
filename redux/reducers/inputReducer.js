import { ADD_NAME } from "../types";

 const initialState = [
     { 
         name: "",
         lastName: "",
     }
 ]

const inputName = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NAME:
      return {
        name: payload.name,
        lastName: payload.lastName,
      };
    default:
      return state;
  }
};

export default inputName;
