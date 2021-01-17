import {FETCH_ALL} from "../actions/types";

export default (userData = [],action) => {
    switch (action.type){
        case FETCH_ALL:
            return action.payload;
        default:
            return userData;
    }
}