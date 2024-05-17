

import './App.css'
import TodoForm from './assets/Component/TodoForm'
import TodoItems from './assets/Component/TodoItems'


import React, { useState } from 'react'
function App() {
  const[todos,settodos]=useState([])
  const[state,setstate]=useState('')
  function anyname(inputvalue){
    setstate(inputvalue.target.value)

  }
  function addtodo(){
    if(state !=='')
      settodos([...todos,state])
    setstate('')
  }

  return (
    <div>
      <input type="text" value={state} onChange={(anyname)} />
      <button onClick={(addtodo)}>addtodo</button>
      {todos.map((anmol,index)  =>
      
      (
        <li dj={index}>{anmol}</li>
      ))}
    </div>
  )
}


export default App




