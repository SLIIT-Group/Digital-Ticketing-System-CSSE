import {combineReducers} from "redux";
import pasReducer from './pasReducer';
import errorReducer from './errorReducer';
import manReducer from "./manReducer";
import insReducer from "./insReducer";

export default combineReducers({
    pas : pasReducer,
    man : manReducer,
    ins : insReducer,
    error : errorReducer,
});