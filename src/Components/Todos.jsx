import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {getTodos } from '../Redux/action';
import Todosinput from './Todosinput';
const Todos = () => {
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.Todos);
   
    useEffect(()=>{
        if(todos.length===0){
            dispatch(getTodos());
        }
    },[]);
  return (
    <div>
        <h2>Todos</h2>
        <Todosinput/>
        <div>
            {todos?.map((data)=>(<div key={data.id}>
                {data.Task}
            </div>))}
        </div>
    </div>
  )
}

export default Todos
