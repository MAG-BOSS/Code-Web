
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import userReducer from "./userReducer";
import userChoice from "./userChoice";

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    user: userReducer,
    choice: userChoice,
});