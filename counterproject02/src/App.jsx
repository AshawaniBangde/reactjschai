import React from 'react'

export default function App() {
    let counter = 15;
    const addValue = ()=>{
        // console.log("clicked me",Math.addValue)
        counter = counter + 1;
        console.log(counter)
        

    }
  return (
    <>    <h1>App</h1>
     <h2>add and {counter}</h2>
    <button onClick={addValue}>Add counter</button>
    <br/>
    <br/>
    <button>remove counter</button>
    </>

  )
}
