import * as api from "../api";
import {FETCH_ALL} from "./types";

export const getData=() => async(dispatch) => {
    try {
        const {data} = await api.fetchData();
        dispatch({type: FETCH_ALL,payload :data});
    } catch (error) {
        console.log(error.message);
    }
}