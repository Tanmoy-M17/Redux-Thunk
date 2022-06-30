import React, { useState } from 'react';
import {v4 as uuid} from "uuid"
import { useDispatch } from 'react-redux';
import { addTodofailure, addTodorequest, addTodosuccess, getTodos } from '../Redux/action';
import axios from "axios"
const Todosinput = () => {
    const [Text,setText]=useState("");
    const dispatch=useDispatch()
    const handeladd=()=>{
        const payload={
            id:uuid(),
            Task:Text,
            status:false
        }
        dispatch(addTodorequest());
        axios.post("http://localhost:8080/Todos",payload)
        .then((r)=>dispatch(addTodosuccess()))
        .then(()=>dispatch(getTodos()))
        .catch((err)=>dispatch(addTodofailure(err)));

        setText("")
    }
  return (
    <div>Todosinput
        <div>
        <input type="text" placeholder='Enter Todo' value={Text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>handeladd()}>Add</button>
        </div>
    </div>
  )
}

export default Todosinput