
import { useState } from 'react'
import './App.css'
import Usestate from './Usestate'
import Useeffect from './Useeffect'

function App() {
  //HOOKS:  Hooks in react enable functional components to use state and lifestyle features.
  //LIFECYCLE: Mount,Updating,Unmount.

  //USESTATE:  `usestate()` in react that allows you to manage the state in functional components.

  //SYNTAX:  import{useState}from "react".
  //const [name,setName] = useState("")  --> const [variable: store the value, function: to update the value]

   const [count, setCount] = useState(0);   //'count' is assigned a value but never used.

  return (
    <>
     <h1>REACT HOOKs</h1>
      <Usestate/>
      <Useeffect/>
    </>
  )
}

export default App
