import {GET_ALL} from "../actions/types";

export default (userChoice = 1,action) => {
    switch (action.type){
        case GET_ALL:
            return action.payload;
        default:
            return userChoice;
    }
}