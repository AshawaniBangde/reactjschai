import React from 'react'
import { useState } from 'react';

export default function App() {

  const[count,setcount] = useState(15)
  const[remove,setremove] = useState()

  // let counter = 15;
  const addValue = () => {

    // console.log("clicked me",Math.addValue)
    // counter = counter + 1;
    // console.log(counter)

    setcount(count+1);


  }
  const removeValue = () =>{
    setremove(remove-1);
  }
  return (
    <>    
    
    <h1>App</h1>
      <h2>add and{count}</h2>
      <button onClick={addValue}>Add counter</button>
      <br />
      <br />
      <button onClick={removeValue}>remove counter</button>
    </>

  )
}
