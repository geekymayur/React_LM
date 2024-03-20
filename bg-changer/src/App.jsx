import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>


        <h1 className="text-center absolute top-10 bottom-0 left-0 right-0">{color}</h1>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

          <div className='flex flex-wrap shadow-lg gap-3 bg-white p-3 py-2 rounded-3xl '>
           <button onClick={()=> setColor('black')} className="text-white outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Black"}}>Black</button>

           <button onClick={()=> setColor('red')} className="text-white outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Red"}}>Red</button>

           <button onClick={()=> setColor('Green')} className="text-white outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
           <button onClick={()=> setColor('Pink')} className="text-white outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Pink"}}>Pink</button>
           <button onClick={()=> setColor('Orange')} className="text-white outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Orange"}}>Orange</button>
           <button onClick={()=> setColor('Teal')} className="text-white outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Teal"}}>Teal</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
