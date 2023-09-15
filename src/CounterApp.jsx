import React, { useState } from 'react'

export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value)

    const handleAdd=()=>{
        setCounter((c)=>c+1)
    }
    const handleReset=()=>{
        setCounter(value)
    }
  return (
  <>
    <div>CounterApp</div>
    <div>{counter}</div>
    <button onClick={handleAdd}>+1</button>
    <button onClick={handleAdd}>-1</button>
    <button onClick={handleReset}>reset</button>
  </>
  )
}

