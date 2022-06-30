import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Todos from '../Components/Todos'
import Singeltodo from './Singeltodo'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Todos/>}/>
        <Route path="/:id" element={<Singeltodo/>}/>
    </Routes>
  )
}

export default Allroutes