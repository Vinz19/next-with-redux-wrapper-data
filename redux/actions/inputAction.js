import { ADD_NAME } from "../types";


const user = {
  name: 'name',
  lastName: 'lastName',
};

export const addName = () =>({
    type: ADD_NAME,
    payload: user,
  });
