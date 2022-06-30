import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionType";
import axios from "axios"
export const getTodorequest=()=>({type:GET_TODOS_REQUEST});
export const getTodosuccess=(payload)=>({type:GET_TODOS_SUCCESS,payload});
export const getTodofailure=()=>({type:GET_TODOS_FAILURE})

export const addTodorequest=()=>({type:ADD_TODOS_REQUEST});
export const addTodosuccess=(payload)=>({type:ADD_TODOS_SUCCESS,payload});
export const addTodofailure=()=>({type:ADD_TODOS_FAILURE})


export const getTodos=(payload)=>(dispatch)=>{
    dispatch(getTodorequest());
    axios.get("http://localhost:8080/Todos")
    .then((r)=>dispatch(getTodosuccess(r.data)))
    .catch((err)=>dispatch(getTodofailure(err)))
}