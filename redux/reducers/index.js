import counterReducer from "./counterReducer";
import inputReducer from "./inputReducer";
import { combineReducers } from "redux";

const reducers = {
    counter: counterReducer,
    input: inputReducer,
}

export default combineReducers(reducers);