import React from 'react'
import Card  from './Card'
export default function App() {
  let myObject ={
    username:"name",
    age:23,

  }
  let array=[1,2,3,4]
  return (
    <>
    <Card username="geeta" some={myObject} see={array} />
    </>
  )
}
