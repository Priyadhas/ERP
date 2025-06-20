import axios from "axios";

const REST_API_BASE_URL="http://localhost:8080/api";

export const listUsers = () => axios.get(REST_API_BASE_URL+ '/users/allusers');

export const createUser = (user)=> axios.post(REST_API_BASE_URL +  '/users/create',user);

export const login = (email,password)=> axios.post(REST_API_BASE_URL+'/login/', {email, password});