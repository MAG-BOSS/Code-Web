import axios from "axios";

const url = 'http://localhost:5000/api/users/userData';

export const fetchData = ()=> axios.get(url);