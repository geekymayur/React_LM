import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState();
  //useRef Hook
  const passref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "$#@~()&^*?";


    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    console.log(password);
    setPassword(password);

  }, [length, numberAllowed, charAllowed, setPassword])

  //copyPassword
  const copyPassword = useCallback(() => {
    passref.current?.select();
    passref.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);


  // use EFfet 

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>

      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">

        <h1 className="text-4xl text-center text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-4">
          <input ref={passref} type="text" value={password} className="outline-none w-full py-3 px-3" placeholder='password' readOnly />
          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">COPY</button>
        </div>

        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 ">
            <input type="range" min={8} max={50} value={length} className="cursor-pointer" onChange={(e) => setLength(e.target.value)} />
            <label htmlFor="">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 ">
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev) => !prev)} />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 ">
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={() => setCharAllowed((prev) => !prev)} />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
