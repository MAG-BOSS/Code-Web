import * as api from "../api";
import {FETCH_ALL , GET_ALL} from "./types";

export const getData=() => async(dispatch) => {
    try {
        const {data} = await api.fetchData();
        dispatch({type: FETCH_ALL,payload :data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }