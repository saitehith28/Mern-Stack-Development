import {combineReducers} from "redux";
import CourseReducer from "./CourseReducer";
const rootReducer=combineReducers({courses:CourseReducer})

export default rootReducer;