import { combineReducers } from "redux";
import activitiesReducer from "./activitiesReducer";
const rootReducer = combineReducers({
  // Object
  activities: activitiesReducer,
});

export default rootReducer;
