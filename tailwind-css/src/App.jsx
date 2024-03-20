import { useState } from 'react'
import './App.css'
import Card from './components/Card';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-slate-400 p-4 rounded-xl text-lime-50'>A new art </h1>
      <div className='flex'>
        <Card profileName="Mayur" btnText="View Page" />
        <Card />
      </div>
    </>
  )
}

export default App
