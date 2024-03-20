import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const countPlus = ()=>{
  const num1 = count + 1;
  setCount(num1);
}
const countMinus = ()=>{
  const num2 = count - 1;
  setCount(num2);
}
// On Key press down
addEventListener("keydown",(event)=>{
  console.log(event.key);
if (event.key === "ArrowDown"){
countMinus();
}
if(event.key === "ArrowUp"){
  countPlus();
}

});




  return (
    <>
      <h1>My Counter App</h1>

      <button onClick={countPlus}>+</button> <h1>{count}</h1>
      <button onClick={countMinus}>-</button>

    </>
  )
}

export default App
