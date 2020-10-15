import {combineReducers} from "redux";
import pasReducer from './pasReducer';
import errorReducer from './errorReducer';


export default combineReducers({
    pas : pasReducer,
    error : errorReducer
});