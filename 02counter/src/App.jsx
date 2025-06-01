import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [counter,setCounter]= useState(15)

  // let counter  = 15

  const addValue = () =>{
    console.log("clicked",Math.random(),counter);
    //condition
    // counter = counter + 1 increment when let use 
    
    // if(counter<=27){
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)
    //   setCounter(counter + 1)
    // }

     //it will only one time increament counter
    // if want to update then 

     if(counter<=27){
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
    }
    
  }

  const removeValue = () =>{
    //condition
    if(counter > 0) setCounter(counter - 1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button
       onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
       onClick={removeValue}
      >remove value {counter}</button>

      <footer>{counter}</footer>
    </>
  )
}

export default App
