import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   <h1 className='text-red-900 text-8xl'>Mayur</h1>
    </>
  )
}

export default App
